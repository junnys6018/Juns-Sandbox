import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Demos, Hero } from './home';

jest.mock('./months', () => [
    {
        to: '#',
        title: "Flock'n roll",
        subTitle: 'Oscillators that sync and swarm',
        month: 'Feb',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'mock.png',
    },
]);

jest.mock('./card', () => () => <div>Card Mock</div>);
jest.mock('./list-item', () => () => <div>List Mock</div>);

test('view switch works', () => {
    const { container } = render(<Demos />, { wrapper: MemoryRouter });

    expect(container).toHaveTextContent('Card Mock');

    const switchElement = screen.getByTestId('view-switch');
    userEvent.click(switchElement);

    expect(container).toHaveTextContent('List Mock');
});

test('<Hero /> snapshot', () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
});
