interface Validatable {
  validate(): void;
}

export abstract class FieldUpdater<Entity extends Validatable, Properties> {
  protected abstract doUpdate(props: Properties, value: unknown): void;

  update(props: Properties, value: unknown, entity: Entity): void {
    this.doUpdate(props, value);
    entity.validate();
  }
}
