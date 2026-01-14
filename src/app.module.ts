import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShiftsModule } from './shifts/shifts.module';
import { AssignmebtsModule } from './assignmebts/assignmebts.module';

import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/entities/user.entity';
import { Shifts } from './shifts/entities/shift.entity';
import { Assignments } from './assignmebts/entities/assignmebt.entity';

@Module({
  imports: [
    UsersModule,
    ShiftsModule,
    AssignmebtsModule,
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'base_management_system',
      autoLoadModels: true,
      synchronize: true,
      models: [User, Shifts, Assignments],
    }),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
