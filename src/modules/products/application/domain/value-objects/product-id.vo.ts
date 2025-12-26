export class ProductId {
  private constructor(public readonly value: string) {}

  static create(value: string): ProductId {
    if (!value) {
      throw new Error('ProductId cannot be empty');
    }

    return new ProductId(value);
  }
}
