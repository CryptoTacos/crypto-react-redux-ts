import { IChatState, ChatBotAction, IMessage } from '../types';
import {
    SET_CURRENT_CHAT, ADD_MESSAGES_TO_CHAT, ADD_MESSAGE_TO_CHAT, CLEAR_MESSAGES, CLEAR_MESSAGE
} from '../constants';

const initialState: IChatState<IMessage> = {
    currentChat: 'welcome',
    messages: [],
    chats: {
        welcome: {
            messages: [{
                key: 1,
                sentOrReceived: 'sent',
                messageText: 'Hello',
                sender: 'client',
            },
            {
                key: 2,
                sentOrReceived: 'sent',
                messageText: 'World!',
                sender: 'server',
            }]
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
                        ...[state.chats[state.currentChat]],
                        messages: [
                            ...[state.chats[state.currentChat].messages],
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
                        ...[state.chats[state.currentChat]],
                        messages: [
                            ...[state.chats[state.currentChat].messages],
                            action.message
                        ],
                    }
                }
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
