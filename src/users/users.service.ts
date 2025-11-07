import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaClient, Usuario } from '../../generated/prisma';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Usuario[]> {
    return 'hello'';
  }

  async findById(id: number): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async create(nome: string, email: string): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: { nome, email },
    });
  }
}
