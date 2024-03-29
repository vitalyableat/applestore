import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { CONFIGURATION_NAMES } from '@entities/product/constants';
import { ProductConfigurationEnum } from '@entities/product/types';
import { useFieldArr } from '@shared/hooks';
import { AddIcon } from '@shared/icons';
import { Column, Row, Select } from '@shared/ui';
import { ConfigurationValue, ProductFormData } from '../../../product-form.types';

import { ConfigurationFieldProps } from './configuration-field.types';
import { ConfigurationValueField } from './configuration-value-field';

export const ConfigurationField: FC<ConfigurationFieldProps> = ({
  remove,
  index,
  availableConfigurations
}) => {
  const { control, watch, setValue } = useFormContext<ProductFormData>();

  const [configurationValues, appendConfigurationValue, removeConfigurationValue] = useFieldArr(
    control,
    `configurations.${index}.values`
  );

  return (
    <Row>
      <Select
        label="Конфигурация"
        required
        value={watch(`configurations.${index}.name`)}
        onSelect={(value) =>
          setValue(`configurations.${index}.name`, value as ProductConfigurationEnum)
        }
      >
        {[watch(`configurations.${index}.name`), ...availableConfigurations].map((key) => (
          <option key={key} value={key}>
            {CONFIGURATION_NAMES[key]}
          </option>
        ))}
      </Select>
      <Column>
        {configurationValues.map((configurationValue, idx) => (
          <ConfigurationValueField
            key={configurationValue.id}
            configurationIndex={index}
            index={idx}
            remove={removeConfigurationValue}
            removeConfiguration={remove}
          />
        ))}
        <AddIcon onClick={() => appendConfigurationValue({} as ConfigurationValue)} />
      </Column>
    </Row>
  );
};
