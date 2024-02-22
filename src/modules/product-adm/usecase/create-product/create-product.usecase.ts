import { Product } from "../../domain/product.entity";
import { ProductGateway } from "../../gateway/product.gateway";
import {
  CreateProductInputDto,
  CreateProductOutputDto,
} from "./create-product.dto";

class CreateProductUseCase {
  constructor(readonly productRepository: ProductGateway) {}

  async execute(input: CreateProductInputDto): Promise<CreateProductOutputDto> {
    const product = new Product(input);
    await this.productRepository.create(product);
    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}

export { CreateProductUseCase };
