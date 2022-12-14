import { Content } from "./content";
import { Replace } from "src/helpers/replace";
import { randomUUID } from "crypto";

//VALUE OBJECTS
export interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    createdAt: Date;
}


export class Notification {
    private props: NotificationProps;
    private _id: string;
    constructor(props: Replace<NotificationProps, {createdAt?: Date} >) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };

        this._id = randomUUID();
    }

    public set content(content: Content) {        
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set recipientId(recipientId: string) {        
        this.props.recipientId = recipientId;
    }

    public get recipientId(): string {
        return this.props.recipientId;
    }

    public set category(category: string) {        
        this.props.category = category;
    }

    public get category(): string {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {        
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public set createdAt(createdAt: Date) {        
        this.props.createdAt = createdAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public get id() {
        return this._id;
    }
}

