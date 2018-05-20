import { IMessage } from '.';
import Avatar from '../components/chat/Avatar';
import { ADD_MESSAGES_TO_CURRENT_CHAT, SET_CURRENT_CHAT } from '../constants';
import WelcomeChat from '../chat/WelcomeChat';
import DefaultChat from '../chat/DefaultChat';

export interface ChatState {
    currentChat: ChatName;
    chatDriver: WelcomeChat | DefaultChat;
}

export interface WelcomeChatState extends ChatState {

}

export interface Welcome {
    messages: IMessage[];
}

export enum ChatName {
    WELCOME = 'WELCOME',
    HOME_LOGGED_IN = 'HOME_LOGGED_IN',
}

export type ChatBotAction =
    AddMessagesToCurrentChat
    | SetCurrentChat;

export interface AddMessagesToCurrentChat {
    type: ADD_MESSAGES_TO_CURRENT_CHAT;
    messages: IMessage[];
}

export interface SetCurrentChat {
    type: SET_CURRENT_CHAT;
    chatName: ChatName;
}

export interface IBaseMessage {
    key: number;
}

export interface IBaseMessageMap<T extends IBaseMessage> {
    [key: number]: T;
}

export interface IMessageMap extends IBaseMessageMap<IMessage> {

}

export interface IMessage extends IBaseMessage {
    sentOrReceived: 'sent' | 'received';
    avatar?: Avatar;
    messageText?: string;
}
