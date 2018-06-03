
class ChatFactory {
    private static keys: number[] = [];
    private static keyGen: number = 0;

    public static getKeys(): number[] {
        return this.keys;
    }

    public static clearKeys(): void {
        this.keys = [];
    }

    public static removeKey(key: number) {
        const index: number = this.keys.findIndex(k => k === key);
        this.keys = [
            ...this.keys.slice(0, index),
            ...this.keys.slice(index + 1, this.keys.length),
        ];
    }

    public static generateNewKey(): number {
        this.keyGen = this.keyGen + 1;
        this.keys.push(this.keyGen);
        return this.keyGen;
    }
}
export default ChatFactory;