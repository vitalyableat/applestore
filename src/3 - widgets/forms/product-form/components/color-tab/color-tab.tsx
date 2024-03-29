import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, Row } from '@shared/ui';
import { AddIcon } from '@shared/icons';
import { useFieldArr } from '@shared/hooks';

import { ProductFormData } from '@widgets/forms/product-form/product-form.types';
import { NEW_COLOR } from '@widgets/forms/product-form/product-form.constants';
import { ColorTabProps } from './color-tab.types';
import { ColorField } from './color-field';

export const ColorTab: FC<ColorTabProps> = ({ onPrevButtonClick }) => {
  const { control } = useFormContext<ProductFormData>();

  const [colors, appendColor, removeColor] = useFieldArr(control, 'colors');

  return (
    <>
      {colors.map((color, index) => (
        <ColorField key={color.id} index={index} remove={removeColor} />
      ))}
      <AddIcon onClick={() => appendColor(NEW_COLOR)} />
      <Row>
        <Button type="button" onClick={onPrevButtonClick}>
          НАЗАД
        </Button>
        <Button type="submit">СОХРАНИТЬ</Button>
      </Row>
    </>
  );
};
