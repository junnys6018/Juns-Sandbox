import { Fragment, useState } from 'react';
import Footer from 'components/footer';
import Card from './card';
import ListItem from './list-item';
import './home.css';
import Switch from 'components/switch';
import { FaList } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import classNames from 'classnames';
import Socials from 'components/socials';
import months from './months';

export interface CardOrListProps {
    title: string;
    subTitle: string;
    month: string;
    description: string;
    image: string;
    to: string;
}

export function Demos() {
    const [view, setView] = useState<'GRID' | 'LIST'>('GRID');

    return (
        <section
            id="demos"
            className="grid grid-cols-[90vw] sm:grid-cols-[512px] xl:grid-cols-[512px_512px] mx-auto mb-8 sm:mb-20 xl:gap-x-16"
        >
            <div className="flex flex-row xl:col-start-1 xl:col-span-2 mb-4">
                <BsGridFill
                    className={classNames('ml-auto transition', view === 'GRID' ? 'text-pink-500' : 'text-neutral-900')}
                />
                <Switch
                    data-testid="view-switch"
                    className="mx-2.5 always-active"
                    onChange={() =>
                        setView(view => {
                            if (view === 'GRID') {
                                return 'LIST';
                            }
                            return 'GRID';
                        })
                    }
                />
                <FaList className={classNames('transition', view === 'LIST' ? 'text-pink-500' : 'text-neutral-900')} />
            </div>
            {view === 'LIST' && months.map((props, index) => <ListItem key={index} {...props} />)}
            {view === 'GRID' && months.map((props, index) => <Card key={index} {...props} />)}
        </section>
    );
}

export function Hero() {
    return (
        <section id="home" className="home__hero-container">
            <div className="container text-center">
                <h1 className="font-semibold text-5xl md:text-7xl xl:text-8xl mt-16 mb-12 home__hero-text">
                    Jun's Sandbox
                </h1>
                <p className="mb-8 w-text mx-auto">
                    This year I challenged myself to program an interesting visualisation of a math concept or algorithm
                    each month. I have a wide interest in math and computer science so you will find demos from many
                    areas including cellular automata, path finding algorithms, fractals, ray tracing, and more...
                </p>
                <p className="w-text mx-auto">
                    I hope you have fun tinkering with each of the demos as much as I had fun making them! To see more
                    of my work, take a look at my{' '}
                    <a
                        href="https://junnys6018.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home__link animate-underline"
                    >
                        portfolio.
                    </a>
                </p>
            </div>
        </section>
    );
}

export default function Home() {
    return (
        <Fragment>
            <Hero />
            <Demos />
            <Footer />
            <Socials />
        </Fragment>
    );
}
