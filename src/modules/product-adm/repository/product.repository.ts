import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Product } from "../domain/product.entity";
import { ProductGateway } from "../gateway/product.gateway";
import { ProductModel } from "./product.model";

class ProductRepository implements ProductGateway {
  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  async find(id: string): Promise<Product> {
    const product = await ProductModel.findOne({
      where: { id },
    });

    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }

    return new Product({
      id: new Id(product.getDataValue("id")),
      name: product.getDataValue("name"),
      description: product.getDataValue("description"),
      purchasePrice: product.getDataValue("purchasePrice"),
      stock: product.getDataValue("stock"),
      createdAt: product.getDataValue("createdAt"),
      updatedAt: product.getDataValue("updatedAt"),
    });
  }
}

export { ProductRepository };
