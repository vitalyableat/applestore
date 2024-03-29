import { FC, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { CONFIGURATION_NAMES } from '@entities/product/constants';
import { ProductConfigurationEnum } from '@entities/product/types';
import { Button, Row } from '@shared/ui';
import { AddIcon } from '@shared/icons';
import { useFieldArr } from '@shared/hooks';

import {
  Configuration,
  ConfigurationValue,
  ProductFormData
} from '@widgets/forms/product-form/product-form.types';
import { ConfigurationField } from './configuration-field';
import { ConfigurationTabProps } from './configuration-tab.types';

export const ConfigurationTab: FC<ConfigurationTabProps> = ({
  onPrevButtonClick,
  onNextButtonClick
}) => {
  const { control, watch } = useFormContext<ProductFormData>();

  const [configurations, appendConfiguration, removeConfiguration] = useFieldArr(
    control,
    'configurations'
  );

  const watchedConfigurations = watch(`configurations`);
  const controlledConfigurations = configurations.map((configuration, index) => ({
    ...configuration,
    ...watchedConfigurations?.[index]
  }));

  const availableConfigurations = useMemo(
    (): ProductConfigurationEnum[] =>
      (Object.keys(CONFIGURATION_NAMES) as ProductConfigurationEnum[]).filter(
        (key) => !controlledConfigurations.some(({ name }) => name === key)
      ),
    [controlledConfigurations]
  );

  const NEW_CONFIGURATION: Configuration = {
    name: availableConfigurations[0],
    values: [{} as ConfigurationValue]
  };

  return (
    <>
      {configurations.map((configuration, index) => (
        <ConfigurationField
          key={configuration.id}
          remove={removeConfiguration}
          index={index}
          availableConfigurations={availableConfigurations}
        />
      ))}
      {!!availableConfigurations.length && (
        <AddIcon onClick={() => appendConfiguration(NEW_CONFIGURATION)} />
      )}
      <Row>
        <Button type="button" onClick={onPrevButtonClick}>
          НАЗАД
        </Button>
        <Button type="button" onClick={onNextButtonClick}>
          ДАЛЕЕ
        </Button>
      </Row>
    </>
  );
};
