export class Content {
    private readonly content: string;

    constructor(content: string) {
        const isValid = this.validateLength(content);
        if (!isValid) {
            throw new Error("Invalid Content length error");
            
        }

        this.content = content;
    }

    private validateLength(content: string) {
       return content.length >= 5 && content.length <= 24;
    }

    get value(): string {
        return this.content;
    }
}