export class ProductPrice {
  private constructor(public readonly value: number) {}

  static create(value: number): ProductPrice {
    if (value <= 0) {
      throw new Error('Product price must be greater than zero');
    }

    return new ProductPrice(value);
  }
}
