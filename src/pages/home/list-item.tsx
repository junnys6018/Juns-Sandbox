import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { CardOrListProps } from './home';

export default function ListItem(props: CardOrListProps) {
    return (
        <div className="flex flow-row mb-4 last:mb-0">
            <Link
                to={props.to}
                className={classNames(
                    'block w-20 h-20 mr-4 bg-center bg-cover flex-shrink-0',
                    props.pixelated && 'pixelated',
                )}
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
