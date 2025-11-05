import { Injectable } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { Usuario } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
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
