import { Product } from "../domain/product.entity";

interface ProductGateway {
  find(): Promise<Product[]>;
  findById(id: string): Promise<Product>;
}

export { ProductGateway };
