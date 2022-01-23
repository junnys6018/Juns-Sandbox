import { CardOrListProps } from './home';

const tempImage =
    'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';


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
        month: 'Feb',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus.',
        image: tempImage,
    },
    {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Mar',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend. Felis condimentum nam tempus suspendisse facilisis viverra tellus.',
        image: tempImage,
    },
];

export default months;