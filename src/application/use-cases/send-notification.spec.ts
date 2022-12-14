import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification-repository";
import { SendNotification } from "./send-notification"



describe('Send Notification', () => {
    it('Should be able to send notification', async () => {
        const notificationRepository = new InMemoryNotificationRepository();
        const sendNotification = new SendNotification(notificationRepository);

       const {notification} = await sendNotification.execute({
            content: 'This is a content',
            category: 'social',
            recipientId: 'recipient'
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notificationRepository.notifications[0]).toBe(notification);
    })
})