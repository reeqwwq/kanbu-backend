import { InputType, Int, Field } from '@nestjs/graphql';

type Gender = 'male' | 'female';
type Role = 'host' | 'guest';
type Mbti1 = 'I' | 'E';
type Mbti2 = 'S' | 'N';
type Mbti3 = 'T' | 'F';
type Mbti4 = 'J' | 'P';
type Mbti = [Mbti1, Mbti2, Mbti3, Mbti4];

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  gender: Gender;

  @Field(() => String)
  role: Role;

  @Field(() => Boolean)
  smoking: boolean;

  @Field(() => Boolean)
  pet: boolean;

  @Field(() => [String])
  job: string[];

  @Field(() => String)
  mbti: Mbti;
}

// id email password gender role smoking pet job mbti
