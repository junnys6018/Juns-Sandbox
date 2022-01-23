import { Fragment, useState } from 'react';
import Footer from 'components/footer/footer';
import Card from './card';
import ListItem from './list-item';
import './home.css';
import Switch from 'components/switch';
import { FaList, FaThLarge } from 'react-icons/fa';
import classNames from 'classnames';

const tempImage =
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

export interface CardOrListProps {
    title: string;
    subTitle: string;
    month: string;
    description: string;
    image: string;
    to: string;
}

const months: CardOrListProps[] = [
    {
        to: '#',
        title: "Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll",
        subTitle: 'Oscillators that sync and swarm Oscillators that sync and swarm Oscillators that sync and swarm',
        month: 'Jan',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus.',
        image: tempImage,
    },
    {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Jan',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus.',
        image: tempImage,
    },
    {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Jan',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus.',
        image: tempImage,
    },
];

export default function Home() {
    const [view, setView] = useState<'GRID' | 'LIST'>('GRID');

    return (
        <Fragment>
            <section id="home" className="home__hero-container">
                <div className="container text-center">
                    <h1 className="font-semibold text-5xl md:text-7xl xl:text-8xl mt-16 mb-12 home__hero-text">
                        Jun's Sandbox
                    </h1>
                    <p className="mb-8 w-text mx-auto">
                        This year I challenged myself to program an interesting visualisation of a math concept or
                        algorithm each month. I have a wide interest in math and computer science so you will find demos
                        from many areas including cellular automata, path finding algorithms, fractals, ray tracing, and
                        more...
                    </p>
                    <p className="w-text mx-auto">
                        I hope you have fun tinkering with each of the demos as much as I had fun making them! To see
                        more of my work, take a look at my{' '}
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
            <section
                id="demos"
                className="grid grid-cols-[90vw] sm:grid-cols-[512px] xl:grid-cols-[512px_512px] mx-auto mb-8 sm:mb-20 xl:gap-x-16"
            >
                <div className="flex flex-row xl:col-start-1 xl:col-span-2 mb-4">
                    <FaThLarge
                        className={classNames(
                            'ml-auto transition',
                            view === 'GRID' ? 'text-pink-500' : 'text-neutral-900',
                        )}
                    />
                    <Switch
                        className="mx-2.5"
                        onChange={() =>
                            setView(view => {
                                if (view === 'GRID') {
                                    return 'LIST';
                                }
                                return 'GRID';
                            })
                        }
                    />
                    <FaList
                        className={classNames('transition', view === 'LIST' ? 'text-pink-500' : 'text-neutral-900')}
                    />
                </div>
                {view === 'LIST' && months.map((props, index) => <ListItem key={index} {...props} />)}
                {view === 'GRID' && months.map((props, index) => <Card key={index} {...props} />)}
            </section>
            <Footer />
        </Fragment>
    );
}
