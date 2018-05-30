import { IBotMessage, IMessage } from '../types';

/**
 * This class supports automated chat processes
 * @author Daniel Revie
 */
abstract class BaseChat {
    protected nextMessage: IBotMessage;
    protected nextMessageCondition: (message: IMessage) => boolean;
    constructor(startingMessage: IBotMessage) {
        this.setNextMessage(startingMessage);
    }

    abstract getNextMessage(message: IMessage): IBotMessage;
    abstract setNextMessage(message: IBotMessage): void;
    abstract setNextMessageCondition(botMessage: IBotMessage): void;
    abstract analyzeInputSatisfiesCondition(message: IMessage): boolean;

}

export default BaseChat;