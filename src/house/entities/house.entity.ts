import { InputType, Field, ObjectType } from '@nestjs/graphql';
//import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { CoreEntity } from '../../common/entities/CoreEntity';
import { Room } from '../../room/entities/room.entity';

export enum HouseType {
  apt = 'apt', //아파트
  offictel = 'offictel',
  MFVilla = 'MFVilla', //다세대
  villa = 'villa', //단독빌라
  other = 'other',
}

@InputType()
@ObjectType()
@Entity()
export class House extends CoreEntity {
  @Column({ unique: true })
  @Field(() => String)
  address: string;

  @Column({ type: 'enum', enum: HouseType })
  @Field(() => String)
  houseType: string;

  @Column()
  @Field(() => Number)
  year: number;

  @Column()
  @Field(() => Number)
  shareArea: number;

  @Column()
  @Field(() => [String])
  shareFurniture: string[];

  @Column() ///one to many
  @Field(() => [Number])
  room: number[];

  @Column()
  @Field(() => [String])
  photo: string[];

  @Column()
  @Field(() => String)
  Description: string;
}
