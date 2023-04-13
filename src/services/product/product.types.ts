import { IProduct, ProductTypeEnum } from '../../interfaces';

export interface IProductService {
  products$: IProduct[];
  addProduct: (addProductData: Omit<IProduct, 'id'>) => void;
  deleteProduct: (id: number) => void;
  updateProduct: (updateProductData: IProduct) => void;
  getProducts: (type?: ProductTypeEnum) => void;
  getProductsByName: (name: string) => void;
}