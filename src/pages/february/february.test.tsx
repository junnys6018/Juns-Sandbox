import { render, screen } from '@testing-library/react';
import { SettingsPanel, SettingsPanelProps } from './february';
import userEvent from '@testing-library/user-event';

test('<SettingsPanel /> snapshot', () => {
    const props: SettingsPanelProps = {
        paused: false,
        togglePaused: jest.fn(),
        updateFunction: 'Cyclic',
        setUpdateFunction: jest.fn(),
        downloadImage: jest.fn(),
        reset: jest.fn(),
    };
    const { asFragment } = render(<SettingsPanel {...props} />);
    expect(asFragment()).toMatchSnapshot();
});

test('<SettingsPanel /> user interaction', () => {
    const props: SettingsPanelProps = {
        paused: false,
        togglePaused: jest.fn(),
        updateFunction: 'Cyclic',
        setUpdateFunction: jest.fn(),
        downloadImage: jest.fn(),
        reset: jest.fn(),
    };

    render(<SettingsPanel {...props} />);

    // update function radio buttons
    const steppingStoneLabel = screen.getByLabelText('Stepping Stone');
    userEvent.click(steppingStoneLabel);
    expect(props.setUpdateFunction).toHaveBeenLastCalledWith('Stepping Stone');

    // download image button
    const downloadImageButton = screen.getByText('Download Image');
    userEvent.click(downloadImageButton);
    expect(props.downloadImage).toHaveBeenCalledTimes(1);
});
