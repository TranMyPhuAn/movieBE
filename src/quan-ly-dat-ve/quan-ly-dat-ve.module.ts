import { Module } from '@nestjs/common';
import { QuanLyDatVeService } from './quan-ly-dat-ve.service';
import { QuanLyDatVeController } from './quan-ly-dat-ve.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [QuanLyDatVeController],
  providers: [QuanLyDatVeService, JwtStrategy]
})
export class QuanLyDatVeModule {}
