import {
    IAddMessageToChat,
    IMessage, ChatName, ICreateNewMessage, ICreateNewMessages, IClearMessages, IClearMessage, IGetChatServerResponse
} from '../types';
import {
    ADD_MESSAGE_TO_CHAT,
    CREATE_NEW_MESSAGE, CREATE_NEW_MESSAGES, CLEAR_MESSAGES, CLEAR_MESSAGE, GET_CHAT_SERVER_RESPONSE
} from '../constants';
import ChatFactory from '../chat/ChatFactory';

/**
 * Send a custom message object, with or without a key,
 * if no key is provided the generator will create the next
 * one in the sequence
 * @param messageText
 * @returns {IAddMessageToChat<IMessage>}
 */
export function addMessageToChat(messageText: string, chatName: ChatName): IAddMessageToChat<IMessage> {
    return {
        type: ADD_MESSAGE_TO_CHAT,
        message: {
            messageText: messageText,
            key: ChatFactory.generateNewKey(),
            sentOrReceived: 'sent',
            sender: 'client',
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

export function getServerResponse(messageText: string): IGetChatServerResponse {
    return {
        type: GET_CHAT_SERVER_RESPONSE,
        messageText,
    };
}