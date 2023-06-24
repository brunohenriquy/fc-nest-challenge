import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

var _ = require('lodash');

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create(data: { asset_id: string; price: number}) {
    let data_new = {
      'price': data.price,
      'status': OrderStatus.OPEN
    }
    return this.prismaService.order.create({
      data: {
        ...data_new,
        Asset: { connect: { id: data.asset_id } },
      },
    });
  }
}
