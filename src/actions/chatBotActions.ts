import { AddMessagesToCurrentChat, IMessage } from '../types';
import { ADD_MESSAGES_TO_CURRENT_CHAT } from '../constants';

export const addMessagesToCurrentChat = (messages: IMessage[]): AddMessagesToCurrentChat => ({
    type: ADD_MESSAGES_TO_CURRENT_CHAT,
    messages,
});
