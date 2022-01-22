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
        <div className="home__card">
            <Link to={props.to} style={{ backgroundImage: `url(${props.image})` }}></Link>
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
                <h3 className="text-neutral-600 text-sm mb-3 truncate">{props.subTitle}</h3>
                <p className="text-neutral-800 line-clamp-4 sm:line-clamp-5">{props.description}</p>
            </div>
        </div>
    );
}
