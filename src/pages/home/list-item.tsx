import { Link } from 'react-router-dom';

export interface ListItemProps {
    title: string;
    subTitle: string;
    month: string;
    description: string;
    image: string;
    to: string;
}

export default function ListItem(props: ListItemProps) {
    return (
        <div className="flex flow-row">
            <Link
                to={props.to}
                className="block w-20 h-20 mr-4 bg-center bg-cover flex-shrink-0"
                style={{ backgroundImage: `url(${props.image})` }}
            ></Link>
            <div className="flex-grow overflow-hidden">
                <div className="flex flex-row items-center">
                    <Link to={props.to} className="font-medium text-lg text-pink-600 truncate">
                        "{props.title}"
                    </Link>
                    <span className="text-neutral-500 ml-auto pl-4">{props.month}</span>
                </div>
                <h3 className="text-sm text-neutral-600 line-clamp-2 mr-8">{props.subTitle}</h3>
            </div>
        </div>
    );
}
