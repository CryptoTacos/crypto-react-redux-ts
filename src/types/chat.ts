import Avatar from '../components/chat/Avatar';

interface IMessage {
    messageId: string;
    sentOrReceived: 'sent' | 'received';
    avatar?: Avatar;
    // tslint:disable-next-line:no-any
    children: any;
}

export {
    IMessage,
};