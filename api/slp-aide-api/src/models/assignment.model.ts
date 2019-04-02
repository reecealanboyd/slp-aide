import {Entity, model, property} from '@loopback/repository';

@model()
export class Assignment extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'any',
  })
  image?: any;

  @property({
    type: 'object',
  })
  questions?: object;


  constructor(data?: Partial<Assignment>) {
    super(data);
  }
}
