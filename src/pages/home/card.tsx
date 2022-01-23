import { Link } from 'react-router-dom';

export interface CardProps {
    title: string;
    subTitle: string;
    month: string;
    description: string;
    image: string;
    to: string;
}

export default function Card(props: CardProps) {
    return (
        <div className="sm:grid sm:grid-cols-[200px_auto] text-center sm:text-left rounded-3xl drop-shadow-lg bg-white p-6 sm:p-0 relative hover:scale-105 transition-transform">
            <Link
                to={props.to}
                className="block rounded-full sm:rounded-none sm:rounded-l-3xl bg-center bg-cover mx-auto mb-1 w-25 h-25 sm:w-full sm:h-full"
                style={{ backgroundImage: `url(${props.image})` }}
            ></Link>
            <div className="sm:p-6 sm:overflow-hidden">
                <div className="sm:flex sm:flex-row sm:items-center">
                    <Link
                        to={props.to}
                        className="text-pink-600 font-medium text-lg block truncate w-min max-w-full mx-auto sm:m-0"
                    >
                        "{props.title}"
                    </Link>
                    <span className="absolute sm:static right-6 sm:right-0 top-6 sm:top-0 sm:ml-auto sm:pl-4">
                        {props.month}
                    </span>
                </div>
                <h3 className="text-neutral-600 text-sm mb-3 truncate sm:mr-8">{props.subTitle}</h3>
                <p className="text-neutral-800 line-clamp-4 h-24 sm:line-clamp-5 sm:h-[7.5rem]">{props.description}</p>
            </div>
        </div>
    );
}