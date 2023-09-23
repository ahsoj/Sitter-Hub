import { prisma } from '../utils/prisma';

class Conversation {
  async getPeoples(conversationId: string) {
    return await prisma.messages.findMany({
      where: { conversationId },
      select: { reciever: true },
    });
  }
  async getChats(conversationId: string) {
    return await prisma.messages.findMany({
      where: { conversationId },
      //   select: { content: true },
    });
  }
}

export default new Conversation();
