import { render } from '@testing-library/react';
import NotFound from './not-found';

test('<NotFound /> snapshot', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
});
