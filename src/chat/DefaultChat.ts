import { IBaseMessage, IMessageMap } from '../types';
import BaseChat from './BaseChat';

/**
 * @author Daniel Revie
 * @description Default implementation of the base chat
 * @extends BaseChat
 */
class DefaultChat extends BaseChat<IBaseMessage, IMessageMap> {
    constructor() {
        super();
        console.info('Default implementation of the BaseChat instantiated');
    }
    public sendCustomMessage(message: IBaseMessage): IBaseMessage {
        throw new Error('Method not implemented.');
    }
}

export default DefaultChat;
