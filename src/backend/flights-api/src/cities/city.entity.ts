import { Destination } from '../../destinations/entities/destination.entity'; // Assuming Destination entity exists
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Unique,
} from 'typeorm';

@Entity('cities')
@Unique(['name']) // Match the UNIQUE constraint in your schema
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  region: string;

  // Define the relationship: A city can have many destinations
  @OneToMany(() => Destination, destination => destination.city)
  destinations: Destination[];
}