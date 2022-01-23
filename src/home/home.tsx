import { Fragment } from 'react';
import Footer from '../footer/footer';
import Card from './card';
import ListItem from './list-item';
import './home.css';

const tempImage =
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

export default function Home() {
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
                className="grid grid-cols-[90vw] sm:grid-cols-[512px] xl:grid-cols-[512px_512px] mx-auto gap-y-8 mb-8 sm:gap-y-10 sm:mb-20 xl:gap-x-16"
            >
                <ListItem
                    to="#"
                    title="Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll"
                    subTitle="Oscillators that sync and swarm Oscillators that sync and swarm Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
                <ListItem
                    to="#"
                    title="Flock'n roll"
                    subTitle="Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
                <ListItem
                    to="#"
                    title="Flock'n roll"
                    subTitle="Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
                <Card
                    to="#"
                    title="Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll Flock'n roll"
                    subTitle="Oscillators that sync and swarm Oscillators that sync and swarm Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
                <Card
                    to="#"
                    title="Flock'n roll"
                    subTitle="Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
                <Card
                    to="#"
                    title="Flock'n roll"
                    subTitle="Oscillators that sync and swarm"
                    month="Jan"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus."
                    image={tempImage}
                />
            </section>
            <Footer />
        </Fragment>
    );
}
