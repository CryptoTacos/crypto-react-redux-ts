import * as React from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import Icon from '@material-ui/core/Icon';
// import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
// import Icon from '@material-ui/core/Icon';
import Send from '@material-ui/icons/Send';
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

    handleChange = (event: any) => {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <Input
                    fullWidth={true}
                    placeholder={'Enter a message...'}
                    onKeyPress={this.keyPress}
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    endAdornment={
                        <InputAdornment position="end" >
                            <IconButton
                                onClick={this.clickSend}
                            >
                                <Send />
                            </IconButton>
                        </InputAdornment>
                    }
                />

            </div>
        );
    }
}

export default UserInput;
