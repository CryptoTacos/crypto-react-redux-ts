import { IMessage } from '.';
import Avatar from '../components/chat/Avatar';
import {
    ADD_MESSAGES_TO_CHAT, SET_CURRENT_CHAT, ADD_MESSAGE_TO_CHAT,
    CLEAR_MESSAGES, CREATE_NEW_MESSAGE, CREATE_NEW_MESSAGES, CLEAR_MESSAGE
} from '../constants';

export interface IChatState<M extends IBaseMessage> {
    currentChat: ChatName;
    messages: M[];
}

export interface IWelcomeChatState extends IChatState<IMessage> {

}

export interface Welcome {
    messages: IMessage[];
}

export enum ChatName {
    DEFAULT = 'DEFAULT',
    WELCOME = 'WELCOME',
    HOME_LOGGED_IN = 'HOME_LOGGED_IN',
}

export type ChatBotAction<M extends IBaseMessage> =
    IAddMessagesToChat
    | ISetCurrentChat
    | IAddMessageToChat<M>
    | ICreateNewMessage
    | IClearMessages
    | ICreateNewMessages
    | IClearMessage;

interface IChatAction {
}

export interface IAddMessagesToChat extends IChatAction {
    type: ADD_MESSAGES_TO_CHAT;
    messages: IMessage[];
    chatName: ChatName;
}

export interface IAddMessageToChat<M extends IBaseMessage> extends IChatAction {
    type: ADD_MESSAGE_TO_CHAT;
    message: M;
    chatName: ChatName;
}
export interface ISetCurrentChat extends IChatAction {
    type: SET_CURRENT_CHAT;
    chatName: ChatName;
}

export interface ICreateNewMessage extends IChatAction {
    type: CREATE_NEW_MESSAGE;
    messageText: string;
}

export interface ICreateNewMessages extends IChatAction {
    type: CREATE_NEW_MESSAGES;
    messageTexts: string[];
}

export interface IClearMessages extends IChatAction {
    type: CLEAR_MESSAGES;
}

export interface IClearMessage extends IChatAction {
    type: CLEAR_MESSAGE;
    messageId: number;
}

export type sender = 'client' | 'server';

export interface IBaseMessage {
    key: number;
    sender: sender;
}

export interface IBaseMessageMap<T extends IBaseMessage> {
    [key: number]: T;
}

export interface IMessageMap extends IBaseMessageMap<IMessage> {

}

export interface IBotMessage extends IMessage {
    messageType: string;
}

export interface IMessage extends IBaseMessage {
    sentOrReceived: 'sent' | 'received';
    avatar?: Avatar;
    messageText?: string;
}
