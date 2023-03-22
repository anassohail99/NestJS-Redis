import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// @UseInterceptors(CacheInterceptor) -> use for only in controller wise
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('manual')
  async getNumber(): Promise<any> {
    return this.appService.getHello();
  }
}
