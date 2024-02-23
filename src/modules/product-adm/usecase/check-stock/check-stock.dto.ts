interface CheckStockInputDTO {
  productId: string;
}

interface CheckStockOutputDTO {
  productId: string;
  stock: number;
}

export { CheckStockInputDTO, CheckStockOutputDTO };
