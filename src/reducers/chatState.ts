import { ChatName, ChatBotAction, IWelcomeChatState, IMessage, } from '../types';
import { SET_CURRENT_CHAT, ADD_MESSAGE_TO_CHAT } from '../constants';

const initialState: IWelcomeChatState = {
    currentChat: ChatName.WELCOME,
    messages: [],

};

const chatStateReducer = (state = initialState, action: ChatBotAction<IMessage>): IWelcomeChatState => {

    switch (action.type) {

        /*
        case ADD_MESSAGES_TO_CURRENT_CHAT: {
            return {
                ...state,
                [state.currentChat]: state.messagesInChat.concat(action.messages)
            };
        }
        */

        case ADD_MESSAGE_TO_CHAT:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message,
                ],
            };

        case SET_CURRENT_CHAT: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default chatStateReducer;
