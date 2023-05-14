import { ObjectId } from 'bson';

import { UniqueEntityId } from '../value-objects';
import { Entity } from './entity';

class StubEntity extends Entity<{ prop1: string; prop2: number }> {
  validate(): void {
    throw new Error('Method not implemented.');
  }
}

describe('Entity Unit Tests', () => {
  it('should set props and id', () => {
    const arrange = { prop1: 'prop1 value', prop2: 10 };
    const entity = new StubEntity(arrange);
    expect(entity.props).toStrictEqual(arrange);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(ObjectId.isValid(entity.id)).toBeTruthy();
  });

  it('should accept a valid uuid', () => {
    const arrange = { prop1: 'prop2 value', prop2: 10 };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(arrange, uniqueEntityId);
    expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId);
    expect(entity.id).toBe(uniqueEntityId.value);
  });

  it('should convert an entity to a JavaScript Object', () => {
    const arrange = { prop1: 'prop3 value', prop2: 10 };
    const uniqueEntityId = new UniqueEntityId();
    const entity = new StubEntity(arrange, uniqueEntityId);
    expect(entity.toJSON()).toStrictEqual({
      id: entity.id,
      ...arrange,
    });
  });
});
