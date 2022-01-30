import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from './navbar';

test('<Navbar /> snapshot', () => {
    const { asFragment } = render(<Navbar />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
});
