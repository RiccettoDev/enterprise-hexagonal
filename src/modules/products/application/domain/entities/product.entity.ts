import { ProductId } from '../value-objects/product-id.vo';
import { ProductName } from '../value-objects/product-name.vo';
import { ProductPrice } from '../value-objects/product-price.vo';

export class Product {
  constructor(
    private readonly _id: ProductId,
    private _name: ProductName,
    private _price: ProductPrice,
  ) {}

  // 🔑 Identidade
  get id(): string {
    return this._id.value;
  }

  // 📛 Nome
  get name(): string {
    return this._name.value;
  }

  // 💰 Preço
  get price(): number {
    return this._price.value;
  }

  // 🧠 Regra de negócio: alterar preço
  changePrice(newPrice: number): void {
    this._price = ProductPrice.create(newPrice);
  }
}
