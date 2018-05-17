import { IMessage } from '.';
import Avatar from '../components/chat/Avatar';
import { ADD_MESSAGES_TO_CURRENT_CHAT, SET_CURRENT_CHAT } from '../constants';

export interface ChatState {
    currentChat: ChatName;
    messagesInChat: IMessage[];
    chats: Chats;
}

export type Chats = {
    [C in ChatName]: Chat;
};

export interface Chat {
    messages: IMessage[];
}

export type ChatName =
    'welcome'
    | 'homeLoggedIn';

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