import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  all() {
    return this.ordersService.all();
  }

  // @Post()
  // create(@Body() body: { id: string; symbol: string; price: number; status: string; asset_id: string }) {
  //   return this.ordersService.create(body);
  // }
}
