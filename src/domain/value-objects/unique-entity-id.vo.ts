import { ValueObject } from './value-object';

export class UniqueEntityId extends ValueObject<string> {
  constructor(readonly id?: string) {
    super(id || UniqueEntityId.generateId());
  }

  private static generateId() {
    const objectId = (
      m = Math,
      d = Date,
      h = 16,
      s = (n: number) => m.floor(n).toString(h),
    ) =>
      s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h));
    return objectId();
  }
}
