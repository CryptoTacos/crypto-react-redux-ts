import {
    ADD_MESSAGES_TO_CHAT, ADD_MESSAGE_TO_CHAT,
    SET_CURRENT_CHAT, CREATE_NEW_MESSAGE, CREATE_NEW_MESSAGES,
    CLEAR_MESSAGES, CLEAR_MESSAGE, GET_CHAT_SERVER_RESPONSE
} from '../../constants';

import { ChatName } from './chat';
import { IBaseMessage, IMessage } from './chatMessages';

type ChatBotAction<M extends IBaseMessage> =
    IAddMessagesToChat
    | ISetCurrentChat
    | IAddMessageToChat<M>
    | ICreateNewMessage
    | IClearMessages
    | ICreateNewMessages
    | IGetChatServerResponse
    | IClearMessage;

interface IChatAction {
}

interface IAddMessagesToChat extends IChatAction {
    type: ADD_MESSAGES_TO_CHAT;
    messages: IMessage[];
    chatName: ChatName;
}

interface IAddMessageToChat<M extends IBaseMessage> extends IChatAction {
    type: ADD_MESSAGE_TO_CHAT;
    message: M;
    chatName: ChatName;
}
interface ISetCurrentChat extends IChatAction {
    type: SET_CURRENT_CHAT;
    chatName: ChatName;
}

interface ICreateNewMessage extends IChatAction {
    type: CREATE_NEW_MESSAGE;
    messageText: string;
}

interface ICreateNewMessages extends IChatAction {
    type: CREATE_NEW_MESSAGES;
    messageTexts: string[];
}

interface IClearMessages extends IChatAction {
    type: CLEAR_MESSAGES;
}

interface IClearMessage extends IChatAction {
    type: CLEAR_MESSAGE;
    messageId: number;
}

interface IGetChatServerResponse extends IChatAction {
    type: GET_CHAT_SERVER_RESPONSE;
    messageText: string;
}

export {
    ChatBotAction,
    IChatAction,
    IAddMessagesToChat,
    IAddMessageToChat,
    ISetCurrentChat,
    ICreateNewMessage,
    ICreateNewMessages,
    IClearMessages,
    IClearMessage,
    IGetChatServerResponse
};
