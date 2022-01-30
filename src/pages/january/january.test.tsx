import { render, screen } from '@testing-library/react';
import { SettingsPanel, SettingsPanelProps } from './january';
import userEvent from '@testing-library/user-event';

test('<SettingsPanel /> snapshot', () => {
    const props: SettingsPanelProps = {
        map: 'Aztec',
        path: 'Circle',
        pitch: 0,
        cameraHeight: 0,

        setMap: jest.fn(),
        setPath: jest.fn(),
        setPitch: jest.fn(),
        setCameraHeight: jest.fn(),
    };
    const { asFragment } = render(<SettingsPanel {...props} />);
    expect(asFragment()).toMatchSnapshot();
});

test('<SettingsPanel /> user interaction', () => {
    const props: SettingsPanelProps = {
        map: 'Aztec',
        path: 'Circle',
        pitch: 0,
        cameraHeight: 0,

        setMap: jest.fn(),
        setPath: jest.fn(),
        setPitch: jest.fn(),
        setCameraHeight: jest.fn(),
    };

    render(<SettingsPanel {...props} />);

    const plainsLabel = screen.getByLabelText('Plains');
    userEvent.click(plainsLabel);
    expect(props.setMap).toBeCalledWith('Plains');

    const linearPathLabel = screen.getByLabelText('Linear');
    userEvent.click(linearPathLabel);
    expect(props.setPath).toBeCalledWith('Linear');
});
