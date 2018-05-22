import { IAddMessageToChat, IMessage, IBaseMessage, IStoreState, ChatName, ICreateNewMessage } from '../types';
import { ADD_MESSAGE_TO_CHAT, CREATE_NEW_MESSAGE } from '../constants';
import { Dispatch } from 'redux';
import ChatFactory from '../chat/ChatFactory';

export type AddMessageToChatThunk<M extends IBaseMessage> =
    (dispatch: Dispatch<IAddMessageToChat<M>>, getState: () => IStoreState) => IAddMessageToChat<M>;

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