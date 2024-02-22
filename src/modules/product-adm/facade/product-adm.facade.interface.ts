interface CreateProductFacadeInputDTO {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

interface CheckStockFacadeInputDTO {
  productId: string;
}

interface CheckStockFacadeOutputDTO {
  productId: string;
  stock: number;
}

interface ProductAdmFacadeInterface {
  createProduct(input: CreateProductFacadeInputDTO): Promise<void>;
  checkStock(
    input: CheckStockFacadeInputDTO
  ): Promise<CheckStockFacadeOutputDTO>;
}

export {
  ProductAdmFacadeInterface,
  CreateProductFacadeInputDTO,
  CheckStockFacadeInputDTO,
  CheckStockFacadeOutputDTO,
};
