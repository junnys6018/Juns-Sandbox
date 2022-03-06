import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './not-found';

test('<NotFound /> snapshot', () => {
    const { asFragment } = render(<NotFound />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
});
