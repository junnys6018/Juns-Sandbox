import classNames from 'classnames';
import Footer from 'components/footer';
import Heading from 'components/heading';
import Navbar from 'components/navbar';
import Socials from 'components/socials';

import { useEffect, useRef } from 'react';
import { CellularAutomaton, Cyclic, SteppingStone } from './cellular-automaton';

interface CanvasProps {
    width: number;
    height: number;
    className?: string;
}

const canvasWidth = 300;
const canvasHeight = 200;

const automaton: CellularAutomaton = [new SteppingStone(), new Cyclic(canvasWidth, canvasHeight, 14)][0];

function CellularAutomataComponent(props: CanvasProps) {
    const canvasElement = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvasContext = canvasElement.current?.getContext('2d');
        if (!canvasContext) {
            return;
        }

        let rafId: number;
        automaton.init(canvasContext, props.width, props.height);

        const raf = () => {
            rafId = requestAnimationFrame(raf);
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
    }, [props.height, props.width]);

    return (
        <canvas
            className={classNames('flex-grow pixelated max-w-full', props.className)}
            width={props.width}
            height={props.height}
            ref={canvasElement}
        ></canvas>
    );
}

function SettingsPanel() {
    return <div className="drop-shadow-lg bg-white rounded-3xl p-8 flex-shrink-0 w-full xl:w-[470px]"></div>;
}

export default function February() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mb-8">
                <Heading month={2} />

                <div className="flex flex-row flex-wrap mt-6 gap-x-10 gap-y-6">
                    <CellularAutomataComponent width={canvasWidth} height={canvasHeight} />
                    <SettingsPanel />
                </div>
                <h1 className="font-semibold text-4xl text-pink-500 my-8">About this demo</h1>
            </div>
            <Footer />
            <Socials />
        </div>
    );
}
