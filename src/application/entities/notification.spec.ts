import { Notification } from "./notification";
import { Content } from "./content";

describe('Notification', () => {
    it('should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('shauhsuahsua'),
            category: 'social',
            recipientId: 'Example',
        });

        expect(notification).toBeTruthy();
    });
});