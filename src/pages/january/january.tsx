import Footer from 'components/footer';
import Heading from 'components/heading';
import Navbar from 'components/navbar';
import Socials from 'components/socials';
import Slider from 'components/slider';

import Aztec from './maps/aztec.png';
import Canyon from './maps/canyon.png';
import Plains from './maps/plains.png';
import Tundra from './maps/tundra.png';
import voxelSpaceApi from './wasm/voxel-space-api';

import { RadioGroup } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

function MapOption(props: { value: string; src: string }) {
    return (
        <RadioGroup.Option
            value={props.value}
            className="group flex flex-col items-center focus-visible:outline-none cursor-pointer"
        >
            {({ checked }) => (
                <Fragment>
                    <img
                        alt={props.value}
                        src={props.src}
                        className={classNames(
                            'rounded-lg transition',
                            !checked && 'brightness-75 group-hover:brightness-100',
                        )}
                    ></img>
                    <RadioGroup.Label
                        className={classNames(
                            'font-medium text-sm cursor-pointer',
                            checked ? 'text-pink-500' : 'text-neutral-700',
                        )}
                    >
                        {props.value}
                    </RadioGroup.Label>
                </Fragment>
            )}
        </RadioGroup.Option>
    );
}

function PathOption(props: { value: string; className?: string }) {
    return (
        <RadioGroup.Option
            value={props.value}
            className={({ checked }) =>
                classNames(
                    'cursor-pointer text-xl py-1.5 px-4 focus-visible:outline-none',
                    checked ? 'bg-pink-500 text-neutral-50 drop-shadow-pink-sm' : 'bg-neutral-200 text-neutral-800',
                    props.className,
                )
            }
        >
            <RadioGroup.Label className="cursor-pointer">{props.value}</RadioGroup.Label>
        </RadioGroup.Option>
    );
}

type Map = 'Aztec' | 'Tundra' | 'Plains' | 'Canyon';
type Path = 'Rotate' | 'Linear' | 'Circle';

export interface SettingsPanelProps {
    map: Map;
    path: Path;
    pitch: number;
    cameraHeight: number;

    setMap: React.Dispatch<React.SetStateAction<Map>>;
    setPath: React.Dispatch<React.SetStateAction<Path>>;
    setPitch: React.Dispatch<React.SetStateAction<number>>;
    setCameraHeight: React.Dispatch<React.SetStateAction<number>>;
}

export function SettingsPanel(props: SettingsPanelProps) {
    return (
        <div className="mx-auto drop-shadow-lg bg-white rounded-3xl p-8" style={{ width: 470 }}>
            <h3 className="font-medium text-neutral-900 mb-2.5">Map</h3>
            <RadioGroup value={props.map} onChange={props.setMap} className="flex flex-row gap-6 mb-4">
                <MapOption value="Aztec" src={Aztec} />
                <MapOption value="Tundra" src={Tundra} />
                <MapOption value="Plains" src={Plains} />
                <MapOption value="Canyon" src={Canyon} />
            </RadioGroup>
            <h3 className="font-medium text-neutral-900 mb-2.5">Path</h3>
            <RadioGroup value={props.path} onChange={props.setPath} className="inline-flex flex-row mb-4">
                <PathOption value="Rotate" className="rounded-l-lg" />
                <PathOption value="Linear" />
                <PathOption value="Circle" className="rounded-r-lg" />
            </RadioGroup>
            <h3 className="font-medium text-neutral-900 mb-2.5">Pitch</h3>
            <Slider
                min={0.2}
                max={1.5}
                step={0.01}
                value={props.pitch}
                onChange={e => props.setPitch(parseFloat(e.currentTarget.value))}
                className="w-full mb-4"
            ></Slider>
            <h3 className="font-medium text-neutral-900 mb-2.5">Camera height</h3>
            <Slider
                min={30}
                max={150}
                step={0.01}
                value={props.cameraHeight}
                onChange={e => props.setCameraHeight(parseFloat(e.currentTarget.value))}
                className="w-full"
            ></Slider>
        </div>
    );
}

type Animate = {
    [key in Path]: (timestamp: number) => [number, number, number];
};

const animate: Animate = {
    Rotate: (timestamp: number) => [timestamp / 8000, 170, 700],
    Linear: (timestamp: number) => [0, timestamp / 10, 700],
    Circle: (timestamp: number) => {
        const RADIUS = 600;
        const PI_OVER_2 = 1.57079632679;
        const t = timestamp / 8000;
        const xpos = RADIUS * Math.cos(t);
        const ypos = RADIUS * Math.sin(t);
        const phi = t + PI_OVER_2;
        return [phi, xpos, ypos];
    },
};

export default function January() {
    const [map, setMap] = useState<Map>('Aztec');
    const [path, setPath] = useState<Path>('Rotate');
    const [pitch, setPitch] = useState(0.7);
    const [cameraHeight, setCameraHeight] = useState(100);

    const canvasElement = useRef<HTMLCanvasElement>(null);
    const voxelSpaceContext = useRef<number | null>(null);

    useEffect(() => {
        voxelSpaceApi.then(([, api]) => {
            voxelSpaceContext.current = api.createContext(`maps/${map}-Color.png`, `maps/${map}-Depth.png`, 0xffe09090);
        });

        return () => {
            voxelSpaceApi.then(([, api]) => {
                if (voxelSpaceContext.current !== null) {
                    api.destroyContext(voxelSpaceContext.current);
                }
            });
        };
    }, [map]);

    useEffect(() => {
        let rafId: number;

        voxelSpaceApi.then(([instance, api]) => {
            const width = 300;
            const height = 300;

            const canvasContext = canvasElement.current?.getContext('2d');

            const raf = (timestamp: number) => {
                rafId = requestAnimationFrame(raf);

                if (voxelSpaceContext.current === null || canvasContext === undefined || canvasContext === null) {
                    return;
                }

                const image = api.render(
                    voxelSpaceContext.current,
                    width,
                    height,
                    ...animate[path](timestamp),
                    pitch,
                    cameraHeight,
                );

                const imageView = new Uint8ClampedArray(instance.HEAPU8.buffer, image, width * height * 4);
                const imageData = new ImageData(imageView, width, height);

                canvasContext.putImageData(imageData, 0, 0);
            };

            rafId = requestAnimationFrame(raf);
        });

        return () => {
            cancelAnimationFrame(rafId);
        };
    }, [cameraHeight, pitch, path]);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container">
                <Heading month={1} />
                <div className="flex flex-row">
                    <SettingsPanel
                        map={map}
                        path={path}
                        pitch={pitch}
                        cameraHeight={cameraHeight}
                        setMap={setMap}
                        setPath={setPath}
                        setPitch={setPitch}
                        setCameraHeight={setCameraHeight}
                    />
                    <canvas style={{ width: 300, height: 300 }} width={300} height={300} ref={canvasElement}></canvas>
                </div>
            </div>
            <Footer />
            <Socials />
        </div>
    );
}
