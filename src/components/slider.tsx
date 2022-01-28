import classNames from 'classnames';

export interface SliderProps {
    id?: string;
    name?: string;
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

export default function Slider(props: SliderProps) {
    return (
        <input
            type="range"
            id={props.id}
            name={props.name}
            min={props.min}
            max={props.max}
            step={props.step}
            onChange={props.onChange}
            value={props.value}
            className={classNames('', props.className)}
        ></input>
    );
}
