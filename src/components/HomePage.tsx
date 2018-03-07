import * as React from 'react';

export interface CryptoCoinDetailViewProps {
    coinName: string;
}

function CryptoCoinDetailView({ coinName }: CryptoCoinDetailViewProps) {
    return (
        <div>
            <span>{coinName}</span>
        </div>
    );
}

export default CryptoCoinDetailView;
