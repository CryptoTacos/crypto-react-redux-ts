import BaseChat from './BaseChat';
import { IBotMessage, IMessage } from '../types';
import ChatFactory from './ChatFactory';

/**
 * This class supports the signup process for a new user
 * @author Daniel Revie
 * @extends BaseChat
 */
class WelcomeChat extends BaseChat {
    constructor() {
        super({
            messageType: 'FirstMessage',
            messageText: 'Please Enter a Valid Username',
            sentOrReceived: 'sent',
            key: ChatFactory.generateNewKey(),
            sender: 'server',
        });
    }

    getNextMessage(): IBotMessage {
        return this.nextMessage;
    }
    setNextMessage(message: IBotMessage): void {
        this.nextMessage = message;

    }
    setNextMessageCondition(botMessage: IBotMessage): void {
        if (botMessage.messageType === 'FirstMessage') {
            this.nextMessageCondition = this.validatePasswordInput;
        }
    }
    analyzeInputSatisfiesCondition(message: IMessage): boolean {

        if (this.nextMessageCondition(message)) {
            return true;
        } else {
            this.nextMessage = {
                messageType: 'Error',
                messageText: 'Please Enter a Valid Response',
                sentOrReceived: 'sent',
                sender: 'server',
                key: ChatFactory.generateNewKey(),
            };
            return false;
        }
    }

    validatePasswordInput = (message: IMessage) => {
        if (message.messageText) {
            return true;
        } else {
            return false;
        }
    }

}

export default WelcomeChat;