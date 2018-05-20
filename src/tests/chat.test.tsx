import WelcomeChat from '../chat/WelcomeChat';
import { IMessage } from '../types';

let welcomeChat: WelcomeChat;

beforeEach(() => {
    welcomeChat = new WelcomeChat();
});

it('sends a message and the message exists in the dictionary', () => {
    const message: IMessage = welcomeChat.sendWelcomeMessage();
    const addedMessage: IMessage | undefined = welcomeChat.getMessageByKey(message.key);
    if (addedMessage !== message) {
        throw new Error('Messages do not match for key!');
    }
});

it('deletes all message from the chat object', () => {
    welcomeChat.sendProvideEmailMessage();
    welcomeChat.sendProvidePasswordMessage();
    welcomeChat.sendProvideUsernameMessage();
    welcomeChat.sendWelcomeMessage();
    welcomeChat.clearMessages();
    if (welcomeChat.getMessagesAsList().length > 0) {
        throw new Error('Messages are not cleared');
    }
});