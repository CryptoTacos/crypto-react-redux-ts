import * as React from 'react';

interface IAvatarProps {

}

interface IAvatarState {

}

class Avatar extends React.Component<IAvatarProps, IAvatarState> {
    constructor(props: IAvatarProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="message-avatar" />
        );
    }
}

export default Avatar;