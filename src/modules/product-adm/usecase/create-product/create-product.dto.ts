interface CreateProductInputDTO {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

interface CreateProductOutputDTO {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export { CreateProductInputDTO, CreateProductOutputDTO };
