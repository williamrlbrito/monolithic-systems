import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Product } from "../domain/product.entity";
import { ProductGateway } from "../gateway/product.gateway";
import { ProductModel } from "./product.model";

class ProductRepository implements ProductGateway {
  async find(): Promise<Product[]> {
    const products = await ProductModel.findAll();
    return products.map(
      (product) =>
        new Product({
          id: new Id(product.id),
          name: product.name,
          description: product.description,
          salesPrice: product.salesPrice,
        })
    );
  }

  async findById(id: string): Promise<Product> {
    const product = await ProductModel.findOne({ where: { id } });

    if (!product) {
      throw new Error("Product not found");
    }

    return new Product({
      id: new Id(product.id),
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    });
  }
}

export { ProductRepository };
