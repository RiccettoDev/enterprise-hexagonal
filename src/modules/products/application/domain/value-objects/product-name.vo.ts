export class ProductName {
  private constructor(public readonly value: string) {}

  static create(value: string): ProductName {
    if (!value || value.trim().length < 3) {
      throw new Error('Product name must have at least 3 characters');
    }

    return new ProductName(value.trim());
  }
}
