import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Job {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}
