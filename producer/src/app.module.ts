import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SealModule } from './seal/seal.module';

@Module({
  imports: [
    
    SealModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
