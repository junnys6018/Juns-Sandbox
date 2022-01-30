import classNames from 'classnames';
import ReactSlider from 'react-slider';
import './slider.css';

export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    value?: number;
    onChange?: (value: number, index: number) => void;
    className?: string;
}

export default function Slider(props: SliderProps) {
    return (
        <ReactSlider
            min={props.min}
            max={props.max}
            step={props.step}
            value={props.value}
            onChange={props.onChange}
            className={classNames('slider', props.className)}
            trackClassName="slider-track"
            thumbClassName="slider-thumb"
        />
    );
}
