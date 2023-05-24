import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/database/prisma.service';
import { ClientsRepository } from './repositories/client.repository';
import { ClientsPrismaRepository } from './repositories/prisma/clients.prisma.repository';

@Module({
  controllers: [ClientController],
  providers: [
    ClientService,
    PrismaService,
    { provide: ClientsRepository, useClass: ClientsPrismaRepository },
  ],
})
export class ClientModule {}
