import Avatar from '../../components/chat/Avatar';
import { sender } from './chat';

interface IBaseMessage {
    key: number;
    sender: sender;
}

interface IMessage extends IBaseMessage {
    sentOrReceived: 'sent' | 'received';
    avatar?: Avatar;
    messageText: string;
}

interface IBotMessage extends IMessage {
    trigger: (messageText: string) => boolean;
}

export {
    IBaseMessage,
    IBotMessage,
    IMessage,
};
