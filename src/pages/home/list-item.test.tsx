import { render } from '@testing-library/react';
import ListItem from './list-item';
import { CardOrListProps } from './home';
import { MemoryRouter } from 'react-router';

test('<ListItem /> snapshot', () => {
    const cardProps: CardOrListProps = {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Feb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis aliquam et lacus, cum eleifend.',
        image: 'mock.png',
    };
    const { asFragment } = render(<ListItem {...cardProps} />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
});
