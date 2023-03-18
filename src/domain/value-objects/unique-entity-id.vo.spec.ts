import { ObjectID } from 'bson';
import { InvalidObjectIdError } from '../errors';
import { UniqueEntityId } from './unique-entity-id.vo';

describe('UniqueEntityId Unit Tests', () => {
  const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');

  it('should throw error when objectid is invalid', () => {
    expect(() => new UniqueEntityId('fake id')).toThrow(
      new InvalidObjectIdError(),
    );
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a objectid passed in constructor', () => {
    const objectid = '63ee269cb17c1516a821730d';
    const vo = new UniqueEntityId(objectid);
    expect(vo.value).toBe(objectid);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should accept a objectid passed in constructor', () => {
    const vo = new UniqueEntityId();
    expect(ObjectID.isValid(vo.value)).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });
});
