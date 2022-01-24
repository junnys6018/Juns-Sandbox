import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardOrListProps } from './home';

export default function Card(props: CardOrListProps) {
    return (
        <div className="group sm:grid sm:grid-cols-[200px_auto] text-center sm:text-left rounded-3xl drop-shadow-lg bg-white p-6 sm:p-0 mb-8 sm:mb-10 last:mb-0 relative transition-transform">
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
                <p className="text-neutral-800 line-clamp-4 h-24 sm:line-clamp-5 sm:h-[7.5rem] sm:mr-8">
                    {props.description}
                </p>
            </div>
            <Link
                to={props.to}
                className="inline-block opacity-0 sm:group-hover:opacity-100 absolute right-4 bottom-4 p-2 text-neutral-900 hover:text-neutral-50 hover:bg-pink-500 rounded-full transition"
            >
                <FaArrowRight size="0.875rem" />
            </Link>
        </div>
    );
}
