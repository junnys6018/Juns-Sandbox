import classNames from 'classnames';
import './switch.css';

interface SwitchProps {
    'data-testid'?: string;
    id?: string;
    name?: string;
    disabled?: boolean;
    className?: string;
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Switch(props: SwitchProps) {
    return (
        <input
            data-testid={props['data-testid']}
            type="checkbox"
            id={props.id}
            name={props.name}
            className={classNames('switch', props.className)}
            disabled={props.disabled}
            checked={props.checked}
            onChange={props.onChange}
        ></input>
    );
}
