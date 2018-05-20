import { IBaseMessageMap, IBaseMessage } from '../types';

/**
 * @author Daniel Revie
 * @author Jeffery Abraham
 * @description All chat classes should extend this class
 * @constructor Initializes the messages dictionary, key list, and keygen seed
 * @example
 * class WelcomeChat extends BaseChat<IBaseMessage, IBaseMessageMap<IBaseMessage>>
 */
abstract class BaseChat<M extends IBaseMessage, C extends IBaseMessageMap<M>> {
    private messages: C;
    private keys: number[];
    private keyGen: number;

    constructor() {
        this.messages = Object.create({});
        this.keys = [];
        this.keyGen = 0;
    }

    /**
     * This method will generate a new unique key for
     * this instance
     */
    protected generateKey(): number {
        return this.keyGen + 1;
    }

    /**
     * This method will push the chat into the dictionary
     * and return the key of this inserted item
     * @param message
     */
    protected insertNewMessage(message: M): number {
        if (message.key) {
            this.keys.push(message.key);
            this.messages[message.key] = message;
        } else {
            console.info('No key provide to message, triggering keygen() ... ');
            const key = this.generateKey();
            message.key = key;
            this.messages[message.key] = message;
        }
        return message.key;
    }

    /**
     * This method will return the message
     * dictionary object
     */
    public getMessageDictionary(): C {
        return this.messages;
    }

    /**
     * This method will parse the dictionary into a list
     * and return a list of the messages
     */
    public getMessagesAsList(): M[] {
        const messages: M[] = [];
        for (const key of this.keys) {
            messages.push(this.messages[key]);
        }
        return messages;
    }

    /**
     * For a given set of keys a list of matching
     * messages will be returned
     * @param keys
     */
    public getMessagesByKeys(keys: number[]): M[] {
        const messages: M[] = [];
        keys.forEach((key) => {
            this.messages[key] ? messages.push(this.messages[key]) : console.error('Bad Key Supplied');
        });
        return messages;
    }

    /**
     * Get a single message by its key
     * will return undefined if key value not found
     * @param key
     */
    public getMessageByKey(key: number): M | undefined {
        try {
            return this.messages[key];
        } catch (error) {
            console.error(`Key ${key} not found`);
            return undefined;
        }
    }

    /**
     * This method will clear the messages dictionary
     */
    public clearMessages(): void {
        this.messages = Object.assign({});
    }

    /**
     * For a give key, lete is from the message dictionary and
     * remove it from the keys list
     * @param key
     */
    public clearMessageByKey(key: number): void {
        try {
            delete this.messages[key];
            this.keys = [
                ...this.keys.slice(0, key),
                ...this.keys.slice(key + 1, this.keys.length)
            ];
        } catch (error) {
            console.error(`Invalid key: ${key} deletion`);
        }
    }

    /**
     * Insert a cusome message into the list
     * @abstract
     * @param message
     */
    public abstract sendCustomMessage(message: M): M;

}

export default BaseChat;
