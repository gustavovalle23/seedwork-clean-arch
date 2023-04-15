import { ValueObject } from './value-object';
import { ObjectID } from 'bson';
import { InvalidObjectIdError } from '../errors';

export class UniqueEntityId extends ValueObject<string> {
  constructor(readonly id?: string) {
    super(id || UniqueEntityId.generateId());
    this.validate();
  }

  private static generateId() {
    return new ObjectID().toString();
  }

  private validate() {
    const isValid = ObjectID.isValid(this.value);
    if (!isValid) {
      throw new InvalidObjectIdError();
    }
  }
}
