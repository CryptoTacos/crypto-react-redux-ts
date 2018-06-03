import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

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
                        avatar={this.props.avatarPath}
                    />
                    <CardContent>
                        {this.props.children}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default CryptoCard;
