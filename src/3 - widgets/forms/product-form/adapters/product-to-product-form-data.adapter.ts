import { IProduct, ProductParamEnum } from '@entities/product/types';
import { Configuration, Param, ProductFormData } from '../product-form.types';

const PARAM_VALUES = Object.values(ProductParamEnum);

export const productToProductFormDataAdapter = (product: IProduct): ProductFormData => {
  const { id, name, type, price, video, preview, configurations, colors, ...rest } = product;

  const params: Param[] = Object.entries(rest).reduce(
    (res, [key, value]) =>
      PARAM_VALUES.includes(key as ProductParamEnum) && typeof value === 'string'
        ? [...res, { name: key, value } as Param]
        : res,
    [] as Param[]
  );

  const productFormConfigurations: Configuration[] =
    configurations?.reduce((res, { name, value, extraPrice }) => {
      const index = res.findIndex((configuration) => configuration.name === name);

      index === -1
        ? res.push({ name, values: [{ value, extraPrice }] })
        : (res[index] = { name, values: [...res[index].values, { value, extraPrice }] });

      return res;
    }, [] as Configuration[]) || [];

  return {
    name,
    type,
    price,
    video,
    preview,
    colors,
    params,
    configurations: productFormConfigurations
  };
};
