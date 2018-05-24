
import { ActionsObservable } from 'redux-observable';
import {
    IStoreState, ChatBotAction,
    IMessage, IAddMessageToChat, ICreateNewMessage, ICreateNewMessages, IClearMessages, IClearMessage
} from '../types';
import { Observable } from 'rxjs';
import { CREATE_NEW_MESSAGE, CREATE_NEW_MESSAGES, CLEAR_MESSAGES, CLEAR_MESSAGE } from '../constants';
import { addMessageToChat, createNewMessages, clearMessages, clearMessage } from '../actions/chatBotActions';
import { MiddlewareAPI } from 'redux';

/**
 * Create a new message and add it to the chat
 * @param action$
 * @param state$
 */
function createNewMessageEpic(action$: ActionsObservable<ChatBotAction<IMessage>>, store: MiddlewareAPI<IStoreState>):
    Observable<IAddMessageToChat<IMessage>> {
    return action$.ofType<ICreateNewMessage>(CREATE_NEW_MESSAGE)
        .map((action: ICreateNewMessage) => {
            return addMessageToChat(action.messageText, store.getState().chatState.currentChat);
        });
}

/**
 * Create multiple new messges and add it to the chat in context in the store
 * @param action$
 * @param store
 */
function createNewMessagesEpic(action$: ActionsObservable<ChatBotAction<IMessage>>, store: MiddlewareAPI<IStoreState>) {
    return action$.ofType<ICreateNewMessages>(CREATE_NEW_MESSAGES)
        .map((action: ICreateNewMessages) => {
            return createNewMessages(action.messageTexts);
        });
}

/**
 * Clear all messages from the state
 * @param action$
 * @param store
 */
function clearMessagesEpic(action$: ActionsObservable<ChatBotAction<IMessage>>, store: MiddlewareAPI<IStoreState>) {
    return action$.ofType<IClearMessages>(CLEAR_MESSAGES)
        .map((action: IClearMessages) => {
            return clearMessages();
        });
}

/**
 * Clear a message from the state
 * @param action$
 * @param store
 */
function clearMessageEpic(action$: ActionsObservable<ChatBotAction<IMessage>>, store: MiddlewareAPI<IStoreState>) {
    return action$.ofType<IClearMessage>(CLEAR_MESSAGE)
        .map((action: IClearMessage) => {
            return clearMessage(action.messageId);
        });
}

export {
    createNewMessageEpic,
    createNewMessagesEpic,
    clearMessagesEpic,
    clearMessageEpic,
};