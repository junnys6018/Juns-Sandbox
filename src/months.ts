import { CardOrListProps } from './pages/home/home';

const tempImage =
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';

const months: CardOrListProps[] = [
    {
        to: '/january',
        title: '2.5D',
        subTitle: 'Voxel space rendering',
        month: 'Jan',
        description: "An implementation of an old rendering technique used in the 2000's.",
        image: tempImage,
    },
];

export default months;
