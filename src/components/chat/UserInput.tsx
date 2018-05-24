import * as React from 'react';
import { TextField, IconButton } from 'material-ui';

interface IUserInputProps {
    onEnterMessage: (message: string) => void;
}

interface IUserInputState {
    inputValue: string;
}

class UserInput extends React.Component<IUserInputProps, IUserInputState> {
    constructor(props: IUserInputProps) {
        super(props);
        this.state = { inputValue: '' };
    }

    keyPress = (ev: React.KeyboardEvent<{}>): void => {
        console.log(ev.key);
        if (ev.key === 'Enter') {
            this.props.onEnterMessage(this.state.inputValue);
            this.setState({
                inputValue: '',
            });
        }
    }

    clickSend = (): void => {
        if (this.state.inputValue) {
            this.props.onEnterMessage(this.state.inputValue);
            this.setState({
                inputValue: '',
            });
        }
    }

    inputChange = (event: React.FormEvent<{}>, newValue: string): void => {
        this.setState({
            inputValue: newValue,
        });
    }

    render() {
        return (
            <div id="user-chat-input">
                <TextField
                    value={this.state.inputValue}
                    onKeyPress={this.keyPress}
                    onChange={this.inputChange}
                />
                <IconButton
                    iconClassName="fa fa-chevron-right"
                    onClick={this.clickSend}
                />
            </div>
        );
    }
}

export default UserInput;
