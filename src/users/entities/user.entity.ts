import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsEnum, IsString } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';
import { CoreEntity } from '../../common/entities/CoreEntity';
import * as bcrypt from 'bcrypt';

export enum UserRole {
  Host = 'Host',
  Guest = 'Guest',
}

export enum UserGender {
  Male = 'Male',
  Female = 'Female',
}

type Mbti1 = 'I' | 'E';
type Mbti2 = 'S' | 'N';
type Mbti3 = 'T' | 'F';
type Mbti4 = 'J' | 'P';
type Mbti = [Mbti1, Mbti2, Mbti3, Mbti4];

@InputType()
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column({ unique: true })
  @Field(() => String)
  @IsEmail()
  email: string;

  @Column({ select: false })
  @Field(() => String)
  @IsString()
  password: string;

  @Column({ type: 'enum', enum: UserGender })
  @Field(() => UserGender)
  @IsEnum(UserGender)
  gender: UserGender;

  @Column({ type: 'enum', enum: UserRole })
  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole;

  @Column({ default: false })
  @Field(() => Boolean)
  @IsBoolean()
  smoking: boolean;

  @Column({ default: false })
  @Field(() => Boolean)
  @IsBoolean()
  pet: boolean;

  @Column({ nullable: true })
  @Field(() => [String])
  job: string[];

  @Column()
  @Field(() => String)
  mbti: Mbti;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (e) {
        console.log(e);
      }
    }
  }
  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      const ok = await bcrypt.compare(aPassword, this.password);
      return ok;
    } catch (e) {
      console.log(e);
    }
  }
}
