interface FindStoreCatalogFacadeOutputDTO {
  products: {
    id: string;
    name: string;
    description: string;
    salesPrice: number;
  }[];
}

interface FindByIdStoreCatalogFacadeOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

interface StoreCatalogFacadeInterface {
  find(): Promise<FindStoreCatalogFacadeOutputDTO>;
  findById(id: string): Promise<FindByIdStoreCatalogFacadeOutputDTO>;
}

export {
  StoreCatalogFacadeInterface,
  FindStoreCatalogFacadeOutputDTO,
  FindByIdStoreCatalogFacadeOutputDTO,
};
