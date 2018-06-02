import { IBotMessage } from '../types';
import ChatFactory from './ChatFactory';

class ChatAPI {
    public static steps: IBotMessage[] = [
        {
            key: 0,
            messageText: 'Welcome to Jeff and Dan\'s chat bot 😃',
            trigger: (messageText: string) => true,
            sentOrReceived: 'sent',
            sender: 'server',
        },
        {
            key: 0,
            messageText: 'Please enter a valid password',
            trigger: (messageText: string) => {
                if (messageText.split(' ').length === 1 && !(messageText.length > 20)) {
                    return true;
                } else {
                    return false;
                }
            },
            sentOrReceived: 'sent',
            sender: 'server',
        },
    ];

    public static endStep: IBotMessage = {
        key: -1,
        messageText: 'IOU one new message',
        trigger: (mT: string) => true,
        sentOrReceived: 'sent',
        sender: 'server',
    };

    private static currentStep: number = 0;

    public static advanceStep() {
        this.currentStep = this.currentStep + 1;
    }

    public static reverseStep() {
        this.currentStep = this.currentStep - 1;
    }

    public static getCurrentStep(): number {
        return this.currentStep;
    }

    public static getCurrentStepMessage(): IBotMessage {
        const currentStep = this.currentStep;
        this.advanceStep();

        if (this.steps.length <= this.currentStep - 1) {
            return {
                ...this.endStep,
                key: ChatFactory.generateNewKey(),
            };
        } else {
            return {
                ...this.steps[currentStep],
                key: ChatFactory.generateNewKey(),
            };
        }
    }
}

export default ChatAPI;