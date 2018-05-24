import { ChatName, ChatBotAction, IMessage, IChatState, } from '../types';
import {
    SET_CURRENT_CHAT, ADD_MESSAGE_TO_CHAT,
    ADD_MESSAGES_TO_CHAT, CLEAR_MESSAGES, CLEAR_MESSAGE
} from '../constants';

const initialState: IChatState<IMessage> = {
    currentChat: ChatName.WELCOME,
    messages: [],

};

const chatStateReducer = (state = initialState, action: ChatBotAction<IMessage>): IChatState<IMessage> => {

    switch (action.type) {
        case SET_CURRENT_CHAT: {
            return {
                ...state,
                currentChat: action.chatName,
            };
        }

        case ADD_MESSAGES_TO_CHAT:
            return {
                ...state,
                [state.currentChat]: [
                    ...state.messages,
                    action.messages,
                ],
            };

        case ADD_MESSAGE_TO_CHAT:
            return {
                ...state,
                [state.currentChat]: [
                    ...state[state.currentChat] ? state[state.currentChat] : [],
                    action.message,
                ],
            };

        case CLEAR_MESSAGES:
            return {
                ...state,
                [state.currentChat]: [],
            };

        case CLEAR_MESSAGE:
            const deleteIndex = (state[state.currentChat] as IMessage[]).findIndex((message) => {
                return message.key === action.messageId;
            });
            return {
                ...state,
                [state.currentChat]: [
                    ...state[state.currentChat].slice(0, deleteIndex),
                    ...state[state.currentChat].slice(deleteIndex + 1, state[state.currentChat].length),
                ],
            };

        default:
            return state;
    }
};

export default chatStateReducer;
