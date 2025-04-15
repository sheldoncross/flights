//  ormconfig.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'mysql', //  or 'postgres'
  host: 'localhost',
  port: 3306,     //  or 5432 for PostgreSQL
  username: 'flights',
  password: 'abroad',
  database: 'flights',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], //  Entities (your database tables as classes)
  synchronize: true, //  Auto-create/update schema (dev only!  Use migrations in production)
};

export default config;