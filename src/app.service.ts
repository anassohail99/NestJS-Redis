import {
  Controller,
  Get,
  Inject,
  CACHE_MANAGER,
  Injectable,
} from '@nestjs/common';

import { Cache, caching } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    await this.cacheManager.set('cached_item', { key: 32 }, { ttl: 20 });
    await this.cacheManager.del('cached_item');
    await this.cacheManager.reset();
    const cachedItem = await this.cacheManager.get('cached_item');
    console.log(cachedItem);
    return 'Hello World!';
  }
}
