import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';
// import { AppService } from './app.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list() {
      return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const  {recipientId, content, category} = body
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recippientId: recipientId
      }
    });
  }
}
