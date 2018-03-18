import * as React from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import { CardText } from 'material-ui';

interface CryptoCardProps {
    avatarPath: string;
    title: string;
    className?: string;
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
            <div className="coin-card">
                <Card>
                    <CardHeader
                        className={this.props.className}
                        title={this.props.title}
                        subtitle={this.props.subtitle}
                        avatar={this.props.avatarPath}
                    />
                    <CardText>
                        {this.props.children}
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default CryptoCard;
