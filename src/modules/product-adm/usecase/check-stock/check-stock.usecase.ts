import { UseCaseInterface } from "../../../@shared/usecase/use-case.interface";
import { ProductGateway } from "../../gateway/product.gateway";
import { CheckStockInputDTO, CheckStockOutputDTO } from "./check-stock.dto";

class CheckStockUseCase implements UseCaseInterface {
  constructor(readonly productRepository: ProductGateway) {}

  async execute(input: CheckStockInputDTO): Promise<CheckStockOutputDTO> {
    const product = await this.productRepository.find(input.productId);
    return {
      productId: product.id.id,
      stock: product.stock,
    };
  }
}

export { CheckStockUseCase };
