import { IMessage, IBaseMessage } from './chatMessages';

interface IChatState<M extends IBaseMessage> {
    currentChat: ChatName;
    messages: M[];
    chats: ChatMap;
}

interface IWelcomeChatState extends IChatState<IMessage> {
    messagesInChat: IMessage[];
    chats: ChatMap;
}

type ChatMap = {
    [C in ChatName]: Chat;
};

interface Chat {
    messages: IMessage[];
}

type ChatName =
    'welcome'
    | 'homeLoggedIn';

type sender = 'client' | 'server';

interface IBaseMessageMap<T extends IBaseMessage> {
    [key: number]: T;
}

interface IMessageMap extends IBaseMessageMap<IMessage> {

}

export {
    IChatState,
    IWelcomeChatState,
    ChatMap,
    Chat,
    ChatName,
    sender,
    IBaseMessageMap,
    IMessageMap,
};