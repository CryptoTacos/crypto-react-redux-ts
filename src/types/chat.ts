import { IMessage } from '.';
import Avatar from '../components/chat/Avatar';
import { ADD_MESSAGES_TO_CURRENT_CHAT, SET_CURRENT_CHAT } from '../constants';

export interface ChatState {
    currentChat: ChatName;
    welcome: Welcome;
    messagesInChat: IMessage[];
}

export interface Welcome {
    messages: IMessage[];
}

export enum ChatName {
    WELCOME = 'WELCOME',
    HOME_LOGGED_IN = 'HOME_LOGGED_IN',
}

export interface IMessage {
    messageId: string;
    sentOrReceived: 'sent' | 'received';
    avatar?: Avatar;
    messageText?: string;
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