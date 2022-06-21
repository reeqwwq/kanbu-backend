import { InputType, Field, ObjectType } from '@nestjs/graphql';
//import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../common/entities/CoreEntity';

@InputType()
@ObjectType()
@Entity()
export class Room extends CoreEntity {
  @Column()
  @Field(() => Number)
  RoomNumber: number;

  @Column()
  @Field(() => Number)
  RoomSize: number;

  @Column()
  @Field(() => Number)
  DividedRatio: number;

  @Column() ///one to one
  @Field(() => String)
  Guest: string;

  @Column()
  @Field(() => Number)
  Cost: number;

  @Column()
  @Field(() => [String])
  Photo: string[];

  @Column()
  @Field(() => String)
  Description: string;

  @Column() ///many to one
  @Field(() => Number)
  House: number;
}
