import { ChatState, ChatName, ChatBotAction } from '../types';
import { ADD_MESSAGES_TO_CURRENT_CHAT, SET_CURRENT_CHAT } from '../constants';

const initialState: ChatState = {
    currentChat: ChatName.WELCOME,
    messagesInChat: [{
        messageId: 'hello',
        sentOrReceived: 'sent',
        messageText: 'Hello'
    },
    {
        messageId: 'world',
        sentOrReceived: 'sent',
        messageText: 'World!'
    }],
    welcome: {
        messages: []
    },
};

const chatStateReducer = (state = initialState, action: ChatBotAction): ChatState => {

    switch (action.type) {
        case ADD_MESSAGES_TO_CURRENT_CHAT: {
            return {
                ...state,
                [state.currentChat]: state.messagesInChat.concat(action.messages)
            };
        }
        case SET_CURRENT_CHAT: {
            return {
                ...state,
                currentChat: action.chatName
            };
        }
        default:
            return state;
    }
};

export default chatStateReducer;