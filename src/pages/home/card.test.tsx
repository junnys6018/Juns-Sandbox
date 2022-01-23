import { render } from '@testing-library/react';
import Card from './card';
import { CardOrListProps } from './home';
import { MemoryRouter } from 'react-router';

test('<Card /> snapshot', () => {
    const cardProps: CardOrListProps = {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Feb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend.',
        image: 'mock.png',
    };
    const { asFragment } = render(<Card {...cardProps} />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
});
