import * as React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

interface CryptoCardProps { 
    avatarPath: string;
    title: string;
    subtitle?: string;
}

interface CryptoCardState { }

class CryptoCard extends React.Component<CryptoCardProps, CryptoCardState> {
    constructor(props: CryptoCardProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <Card>
                <CardHeader
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                    avatar={this.props.avatarPath}
                />
                {this.props.children}
            </Card>
        );
    }
}

export default CryptoCard;
