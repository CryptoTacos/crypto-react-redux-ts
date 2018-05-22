
import { ActionsObservable } from 'redux-observable';
import { IStoreState, ChatBotAction, IMessage, IAddMessageToChat, ICreateNewMessage } from '../types';
import { Observable } from 'rxjs';
import { CREATE_NEW_MESSAGE } from '../constants';
import { addMessageToChat } from '../actions/chatBotActions';
import { MiddlewareAPI } from 'redux';
/**
 * Create a new message and add it to the chat
 * @param action$
 * @param state$
 */
export function createNewMessageEpic
    (action$: ActionsObservable<ChatBotAction<IMessage>>, store: MiddlewareAPI<IStoreState>):
    Observable<IAddMessageToChat<IMessage>> {
    return action$.ofType<ICreateNewMessage>(CREATE_NEW_MESSAGE)
        .map((action: ICreateNewMessage) => {
            return addMessageToChat(action.messageText, store.getState().welcomeChatState.currentChat);
        });
}