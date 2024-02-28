import { UseCaseInterface } from "../../@shared/usecase/use-case.interface";
import {
  FindByIdStoreCatalogFacadeOutputDTO,
  FindStoreCatalogFacadeOutputDTO,
  StoreCatalogFacadeInterface,
} from "./store-catalog.facade.interface";

class StoreCatalogFacade implements StoreCatalogFacadeInterface {
  constructor(
    readonly findProductUseCase: UseCaseInterface,
    readonly findProductsUseCase: UseCaseInterface
  ) {}

  async find(): Promise<FindStoreCatalogFacadeOutputDTO> {
    return await this.findProductsUseCase.execute("");
  }

  async findById(id: string): Promise<FindByIdStoreCatalogFacadeOutputDTO> {
    return await this.findProductUseCase.execute({ id });
  }
}

export { StoreCatalogFacade };
