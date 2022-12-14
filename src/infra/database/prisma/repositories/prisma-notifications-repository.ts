import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entities/notification";
import { NotificationRepository } from "src/application/repositories/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}
    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                category: notification.category,
                content: notification.content.value,
                recippientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
                id: notification.id
            }
        })
    }
}