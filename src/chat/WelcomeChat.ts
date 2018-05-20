import BaseChat from './BaseChat';
import { IBaseMessageMap, IMessage, IMessageMap } from '../types';

/**
 * Welcome Chat
 * @author Daniel Revie
 * @description WelcomeChat class to facilitate the signup process of a user
 * @extends BaseChat
 * @constructor Calls parent class constructor and append welcome message to the list
 * @example
 * const welcomeChat = new WelcomeChat();
 * welcomeChat.sendProvideUsernameMessage();
 * welcomeChat.clearMessage();
 */
class WelcomeChat extends BaseChat<IMessage, IMessageMap> {
    constructor() {
        super();
        this.sendWelcomeMessage();
    }

    /**
     * Send a custom message object, with or without a key,
     * if no key is provided the generator will create the next
     * one in the sequence
     * @param message
     * @returns {IMessage}
     */
    public sendCustomMessage(message: IMessage): IMessage {
        if (message.key) {
            this.insertNewMessage(message);
            return message;
        } else {
            const key: number = this.generateKey();
            this.insertNewMessage({
                ...message,
                key,
            });
            return {
                ...message,
                key,
            };
        }
    }

    /**
     * Execute this method to add the welcome message to the
     * message list
     */
    public sendWelcomeMessage(): IMessage {
        const welcomeMessage: IMessage = Object.create({
            key: this.generateKey(),
            sentOrReceived: 'sent',
            messageText: 'Hello, welcome to Crypto Tacos!',
        });
        this.insertNewMessage(welcomeMessage);
        return welcomeMessage;
    }

    /**
     * Execute this method to create a message prompt for the user to provide
     * user name
     */
    public sendProvideUsernameMessage(): IMessage {
        const provideUsernameMessage: IMessage = Object.create({
            key: this.generateKey(),
            sentOrReceived: 'sent',
            messageText: 'Hello, welcome to Crypto Tacos!',
        });
        this.insertNewMessage(provideUsernameMessage);
        return provideUsernameMessage;
    }

    /**
     * Execute this method to prompt the user to enter their
     * password
     */
    public sendProvidePasswordMessage(): IMessage {
        const providePasswordMessage: IMessage = Object.create({
            key: this.generateKey(),
            sentOrReceived: 'sent',
            messageText: 'Hello, welcome to Crypto Tacos!',
        });
        this.insertNewMessage(providePasswordMessage);
        return providePasswordMessage;
    }

    /**
     * Execute this method to prompt the user to provide
     * their email address
     */
    public sendProvideEmailMessage(): IMessage {
        const provideEmailMessage: IMessage = Object.create({
            key: this.generateKey(),
            sentOrReceived: 'sent',
            messageText: 'Hello, welcome to Crypto Tacos!',
        });
        this.insertNewMessage(provideEmailMessage);
        return provideEmailMessage;
    }

}

export default WelcomeChat;
