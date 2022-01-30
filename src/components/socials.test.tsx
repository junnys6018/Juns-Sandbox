import { render } from '@testing-library/react';
import Socials from './socials';

test('<Socials /> snapshot', () => {
    const { asFragment } = render(<Socials />);
    expect(asFragment()).toMatchSnapshot();
});
