import { UseCaseInterface } from "../../@shared/usecase/use-case.interface";
import {
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
  CreateProductFacadeInputDTO,
  ProductAdmFacadeInterface,
} from "./product-adm.facade.interface";

interface UseCasesProps {
  createProductUseCase: UseCaseInterface;
  checkStockUseCase: UseCaseInterface;
}

class ProductAdmFacade implements ProductAdmFacadeInterface {
  private _createProductUseCase: UseCaseInterface;
  private _checkStockUseCase: UseCaseInterface;

  constructor({ createProductUseCase, checkStockUseCase }: UseCasesProps) {
    this._createProductUseCase = createProductUseCase;
    this._checkStockUseCase = checkStockUseCase;
  }

  createProduct(input: CreateProductFacadeInputDTO): Promise<void> {
    return this._createProductUseCase.execute(input);
  }

  checkStock(
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO> {
    return this._checkStockUseCase.execute(input);
  }
}

export { ProductAdmFacade };
