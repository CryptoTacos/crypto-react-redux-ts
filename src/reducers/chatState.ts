import { IChatState, ChatBotAction, IMessage } from '../types';
import {
    SET_CURRENT_CHAT, ADD_MESSAGES_TO_CHAT, ADD_MESSAGE_TO_CHAT, CLEAR_MESSAGES, CLEAR_MESSAGE
} from '../constants';

const initialState: IChatState<IMessage> = {
    currentChat: 'welcome',
    messages: [],
    chats: {
        welcome: {
            messages: []
        },
        homeLoggedIn: {
            messages: [],
        },
    }
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
                chats: {
                    ...state.chats,
                    [state.currentChat]: {
                        ...state.chats[state.currentChat],
                        messages: [
                            ...state.chats[state.currentChat].messages,
                            action.messages
                        ],
                    }
                }
            };

        case ADD_MESSAGE_TO_CHAT:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [state.currentChat]: {
                        ...state.chats[state.currentChat],
                        messages: [
                            ...state.chats[state.currentChat].messages,
                            action.message
                        ],
                    }
                }
            };

        case CLEAR_MESSAGES:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [state.currentChat]: Object.assign({}),
                },
            };

        case CLEAR_MESSAGE:
            const deleteIndex = state.chats[state.currentChat].messages.findIndex(
                message => message.key === action.messageId);

            return {
                ...state,
                chats: {
                    ...state.chats,
                    [state.currentChat]: {
                        ...state.chats[state.currentChat],
                        messages: [
                            ...state.chats[state.currentChat].messages.slice(
                                0, deleteIndex),
                            ...state.chats[state.currentChat].messages.slice(
                                deleteIndex + 1, state.chats[state.currentChat].messages.length),
                        ]
                    }
                },
            };

        default:
            return state;
    }
};

export default chatStateReducer;
