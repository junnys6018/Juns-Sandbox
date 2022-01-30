import { render } from '@testing-library/react';
import Footer from './footer';

jest.mock('./socials', () => {
    return {
        __esModule: true,
        SocialLinks: () => <div>Social Links Mock</div>,
    };
});

test('<Footer /> snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
});
