import {
  FindByIdStoreCatalogFacadeOutputDTO,
  FindStoreCatalogFacadeOutputDTO,
  StoreCatalogFacadeInterface,
} from "./store-catalog.facade.interface";

class StoreCatalogFacade implements StoreCatalogFacadeInterface {
  find(): Promise<FindStoreCatalogFacadeOutputDTO> {
    throw new Error("Method not implemented.");
  }

  findById(id: string): Promise<FindByIdStoreCatalogFacadeOutputDTO> {
    throw new Error("Method not implemented.");
  }
}

export { StoreCatalogFacade };
