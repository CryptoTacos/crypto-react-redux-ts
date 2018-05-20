import { ChatState, ChatName, ChatBotAction, WelcomeChatState, } from '../types';
import { SET_CURRENT_CHAT } from '../constants';
import WelcomeChat from '../chat/WelcomeChat';
import DefaultChat from '../chat/DefaultChat';

const initialState: WelcomeChatState = {
    currentChat: ChatName.WELCOME,
    chatDriver: new WelcomeChat()

};

const chatStateReducer = (state = initialState, action: ChatBotAction): ChatState => {

    switch (action.type) {

        /*
        case ADD_MESSAGES_TO_CURRENT_CHAT: {
            return {
                ...state,
                [state.currentChat]: state.messagesInChat.concat(action.messages)
            };
        }
        */
        case SET_CURRENT_CHAT: {
            return {
                ...state,
                currentChat: action.chatName,
                chatDriver: getChatInstance(action.chatName)
            };
        }
        default:
            return state;
    }
};

/**
 * This method returns a new instance of a chat object based upon the chat name
 * @param chat
 * @todo revist implementing dynamic return
 * <T extends BaseChat<M, C>, M extends IBaseMessage, C extends IBaseMessageMap<M>>
 */
function getChatInstance(chat: ChatName): WelcomeChat | DefaultChat {
    switch (chat) {
        case ChatName.HOME_LOGGED_IN:
            break;
        case ChatName.WELCOME:
            return new WelcomeChat();
        default:
            throw new Error(`No chat type implemented for ${chat}`);
    }
    return new DefaultChat();
}

export default chatStateReducer;
