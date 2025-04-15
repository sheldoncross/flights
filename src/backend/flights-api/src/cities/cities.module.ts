import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])], // Make City entity available in this module
  controllers: [CitiesController],
  providers: [CitiesService],
  exports: [CitiesService] // Export if other modules need it
})
export class CitiesModule {}