import { IMessage } from '../types';

class ChatAPI {
    public newTexMessage(message: IMessage) {
        console.log('API call');
    }
}

export default ChatAPI;