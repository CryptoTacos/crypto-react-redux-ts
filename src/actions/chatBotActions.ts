import {
    IAddMessageToChat,
    IMessage, ChatName, ICreateNewMessage,
    ICreateNewMessages, IClearMessages, IClearMessage,
    IGetChatServerResponse, ISetCurrentChat, IBotMessage, sender
} from '../types';
import {
    ADD_MESSAGE_TO_CHAT,
    CREATE_NEW_MESSAGE, CREATE_NEW_MESSAGES, CLEAR_MESSAGES, CLEAR_MESSAGE, GET_CHAT_SERVER_RESPONSE, SET_CURRENT_CHAT
} from '../constants';
import ChatFactory from '../chat/ChatFactory';

/**
 * Set the context of the chat window for a specific chat
 * @param chat
 */
export function setCurrentChat(chatName: ChatName): ISetCurrentChat {
    return {
        type: SET_CURRENT_CHAT,
        chatName
    };
}

/**
 * Send a custom message object, with or without a key,
 * if no key is provided the generator will create the next
 * one in the sequence
 * @param messageText
 * @returns {IAddMessageToChat<IMessage>}
 */
export function addMessageToChat(messageText: string, chatName: ChatName, chatSender?: sender):
    IAddMessageToChat<IMessage> {
    return {
        type: ADD_MESSAGE_TO_CHAT,
        message: {
            messageText: messageText,
            key: ChatFactory.generateNewKey(),
            sentOrReceived: 'sent',
            sender: chatSender ? chatSender : 'client',
        },
        chatName,
    };
}

/**
 * This action creator will trigger the create new message epic
 * @param messageText
 * @returns {ICreateNewMessage<IMessage>}
 */
export function createNewMessage(messageText: string): ICreateNewMessage {
    return {
        type: CREATE_NEW_MESSAGE,
        messageText,
    };
}

/**
 * Create multiple new messages and add them to the chat
 * @param messageTexts
 */
export function createNewMessages(messageTexts: string[]): ICreateNewMessages {
    return {
        type: CREATE_NEW_MESSAGES,
        messageTexts,
    };
}

/**
 * Clear all messages from chat
 */
export function clearMessages(): IClearMessages {
    return {
        type: CLEAR_MESSAGES,
    };
}

/**
 * Remove a message from the chat by message id
 * @param messageId
 */
export function clearMessage(messageId: number): IClearMessage {
    return {
        type: CLEAR_MESSAGE,
        messageId,
    };
}

/**
 * Trigger epic to get and set the server response based on message text
 * @param messageText
 */
export function getServerResponse(messageText: string): IGetChatServerResponse {
    return {
        type: GET_CHAT_SERVER_RESPONSE,
        messageText,
    };
}

/**
 * Add a message to chat indicating that the client made an invalid response based upon
 * the trigger condition of the chat bot's previous message
 * @param chatName
 */
export function invalidClientResponse(chatName: ChatName): IAddMessageToChat<IBotMessage> {
    return {
        type: ADD_MESSAGE_TO_CHAT,
        message: {
            messageText: 'Please provide a valid response',
            key: ChatFactory.generateNewKey(),
            sentOrReceived: 'sent',
            sender: 'server',
            trigger: (messageText: string) => true,
        },
        chatName,
    };
}