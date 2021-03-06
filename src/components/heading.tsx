import { Fragment } from 'react';
import months from 'months';

export type HeadingProps =
    | {
          title: string;
          subTitle: string;
      }
    | { month: number };

const monthStrings = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default function Heading(props: HeadingProps) {
    let title: string, subTitle: string;

    if ('month' in props) {
        title = `${monthStrings[props.month - 1]} - "${months[props.month - 1].title}"`;
        subTitle = months[props.month - 1].subTitle;
    } else {
        title = props.title;
        subTitle = props.subTitle;
    }

    return (
        <Fragment>
            <h1 className="font-semibold text-4xl text-pink-500 mb-4 md:mt-8">{title}</h1>
            <h2 className="font-semibold text-2xl text-neutral-700">{subTitle}</h2>
        </Fragment>
    );
}
