import { render } from '@testing-library/react';
import Switch from './switch';

test('<Switch /> snapshot', () => {
    const { asFragment } = render(<Switch />);
    expect(asFragment()).toMatchSnapshot();
});
