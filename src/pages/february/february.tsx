import { RadioGroup } from '@headlessui/react';
import Footer from 'components/footer';
import Heading from 'components/heading';
import Navbar from 'components/navbar';
import Socials from 'components/socials';

import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { FaPause, FaPlay, FaRedoAlt } from 'react-icons/fa';
import { CellularAutomaton, Cyclic, SteppingStone } from './cellular-automaton';
import aboutMarkdown from './about.md';
import { AsyncMarkdown } from 'markdown';

interface CellularAutomataComponentProps {
    width: number;
    height: number;
    children: (props: {
        paused: boolean;
        togglePaused: () => void;
        updateFunction: UpdateFunction;
        setUpdateFunction: (updateFunction: UpdateFunction) => void;
        downloadImage: () => void;
        reset: () => void;
    }) => React.ReactNode;
}

const canvasWidth = 300;
const canvasHeight = 200;

function CellularAutomataComponent(props: CellularAutomataComponentProps) {
    const canvasElement = useRef<HTMLCanvasElement>(null);

    const [paused, setPaused] = useState(false);
    const togglePaused = useCallback(() => setPaused(p => !p), []);

    const [updateFunction, _setUpdateFunction] = useState<UpdateFunction>('Stepping Stone');
    const [automaton, setAutomaton] = useState<CellularAutomaton>(new SteppingStone());

    const setUpdateFunction = useCallback((updateFunction: UpdateFunction) => {
        _setUpdateFunction(updateFunction);
        switch (updateFunction) {
            case 'Cyclic':
                setAutomaton(new Cyclic(canvasWidth, canvasHeight, 14));
                break;
            case 'Stepping Stone':
                setAutomaton(new SteppingStone());
                break;
        }
    }, []);

    const downloadImage = useCallback(() => {
        const canvas = canvasElement.current;
        if (!canvas) {
            return;
        }

        const link = document.createElement('a');
        link.download = 'generative-art.png';
        link.href = canvas.toDataURL();
        link.click();
    }, []);

    // call init on automaton every time it has changed
    const reset = useCallback(() => {
        const canvasContext = canvasElement.current?.getContext('2d');
        if (!canvasContext) {
            return;
        }
        automaton.init(canvasContext, props.width, props.height);
    }, [automaton, props.height, props.width]);

    useEffect(reset, [reset]);

    // animate the canvas
    useEffect(() => {
        const canvasContext = canvasElement.current?.getContext('2d');
        if (!canvasContext) {
            return;
        }

        let rafId: number;

        const raf = () => {
            rafId = requestAnimationFrame(raf);

            if (paused) {
                return;
            }

            const oldImage = canvasContext.getImageData(0, 0, props.width, props.height);
            const newImage = canvasContext.createImageData(props.width, props.height);

            for (let y = 0; y < props.height; y++) {
                for (let x = 0; x < props.width; x++) {
                    automaton.update(oldImage, newImage, x, y);
                }
            }
            automaton.finishFrame();
            canvasContext.putImageData(newImage, 0, 0);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
        };
    }, [automaton, paused, props.height, props.width]);

    return (
        <Fragment>
            <canvas
                className="flex-grow pixelated max-w-full"
                width={props.width}
                height={props.height}
                ref={canvasElement}
            ></canvas>
            {props.children({ paused, togglePaused, updateFunction, setUpdateFunction, downloadImage, reset })}
        </Fragment>
    );
}

interface SettingsPanelProps {
    paused: boolean;
    togglePaused: () => void;
    updateFunction: UpdateFunction;
    setUpdateFunction: (updateFunction: UpdateFunction) => void;
    downloadImage: () => void;
    reset: () => void;
}

type UpdateFunction = 'Stepping Stone' | 'Cyclic';

function UpdateFunctionOption(props: { value: UpdateFunction }) {
    return (
        <RadioGroup.Option value={props.value} className="flex flex-row items-center gap-1.5 cursor-pointer">
            {({ checked }) => (
                <Fragment>
                    <div className="bg-neutral-300 rounded-full w-4 h-4 flex items-center justify-center">
                        {checked && (
                            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_4px_#ec4899]"></div>
                        )}
                    </div>
                    <RadioGroup.Label className="font-medium">{props.value}</RadioGroup.Label>
                </Fragment>
            )}
        </RadioGroup.Option>
    );
}

function SettingsPanel(props: SettingsPanelProps) {
    return (
        <div className="flex flex-col items-start drop-shadow-lg bg-white rounded-3xl p-8 flex-shrink-0 w-full xl:w-[470px]">
            <div className="flex flex-row items-center gap-10">
                <button
                    className="bg-pink-500 hover:bg-pink-600 rounded-full w-24 h-24 flex items-center justify-center"
                    onClick={props.togglePaused}
                >
                    {props.paused ? (
                        <FaPlay className="text-neutral-50 w-8 h-8" />
                    ) : (
                        <FaPause className="text-neutral-50 w-8 h-8" />
                    )}
                </button>

                <button
                    onClick={props.reset}
                    className="bg-neutral-200 hover:bg-neutral-300 rounded-full w-16 h-16 flex items-center justify-center"
                >
                    <FaRedoAlt className="text-neutral-900 w-6 h-6" />
                </button>
            </div>

            <h3 className="font-medium text-neutral-900 mb-2.5 mt-6">Update Function</h3>
            <RadioGroup value={props.updateFunction} onChange={props.setUpdateFunction} className="mb-6">
                <UpdateFunctionOption value="Stepping Stone" />
                <UpdateFunctionOption value="Cyclic" />
            </RadioGroup>

            <button
                onClick={props.downloadImage}
                className="flex items-center justify-center mt-auto font-medium bg-pink-500 hover:bg-pink-600 rounded-lg text-neutral-50 py-2 px-3"
            >
                Download Image
            </button>
        </div>
    );
}

export default function February() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mb-8">
                <Heading month={2} />

                <div className="flex flex-row flex-wrap mt-6 gap-x-10 gap-y-6">
                    <CellularAutomataComponent width={canvasWidth} height={canvasHeight}>
                        {props => <SettingsPanel {...props} />}
                    </CellularAutomataComponent>
                </div>
                <h1 className="font-semibold text-4xl text-pink-500 my-8">About this demo</h1>
                <AsyncMarkdown className="max-w-none" src={aboutMarkdown} />
            </div>
            <Footer />
            <Socials />
        </div>
    );
}
