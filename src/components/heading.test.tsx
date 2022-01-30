import { render } from '@testing-library/react';
import Heading from './heading';

test('<Heading /> snapshot', () => {
    let { asFragment } = render(<Heading month={1} />);
    expect(asFragment()).toMatchSnapshot();

    ({ asFragment } = render(<Heading title="Foo" subTitle="bar" />));
    expect(asFragment()).toMatchSnapshot();
});
