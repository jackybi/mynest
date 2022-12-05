import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Post } from './post.entity';
import { PostService } from './post.service';

@Module({
  imports: [
    // 向帖子模块注册 passport，并配置默认策略为 jwt，因为覆盖了默认的策略，所以要在每个使用 @AuthGuard() 的模块导入 PassportModule
    TypeOrmModule.forFeature([Post]),
  ],
  providers: [PostService],
})
export class PostModule {}
