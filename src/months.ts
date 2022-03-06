import { CardOrListProps } from './pages/home/home';
import january from './icon-images/january.png';

const months: CardOrListProps[] = [
    {
        to: '/january',
        title: '2.5D',
        subTitle: 'Voxel space rendering',
        month: 'Jan',
        description: "An implementation of an old rendering technique used in the 1990's.",
        image: january,
        pixelated: true,
    },
    {
        to: '/february',
        title: 'temp',
        subTitle: 'Generative art',
        month: 'Feb',
        description: "Creating generative art using cellular automata.",
        image: january, // todo
        pixelated: true, // todo
    },
];

export default months;
