interface CreateProductInputDto {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

interface CreateProductOutputDto {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export { CreateProductInputDto, CreateProductOutputDto };
