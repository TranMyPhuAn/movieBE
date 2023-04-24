import { Module } from '@nestjs/common';
import { QuanLyRapService } from './quan-ly-rap.service';
import { QuanLyRapController } from './quan-ly-rap.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [QuanLyRapController],
  providers: [QuanLyRapService, JwtStrategy]
})
export class QuanLyRapModule {}
