import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Input, Loader, Row, Text } from '../../../../ui';
import { CheckboxIcon, DeleteIcon } from '../../../../ui/icons';
import { cardFormDataToCardAdapter, cardToCardFormDataAdapter } from '../../adapters';
import { cardService } from '../../../../../services/card';
import { CardFormData, CardFormProps } from './card-form.types';
import { CardItem } from '../../components/card-item';

export const CardForm: FC<CardFormProps> = ({ card, hideModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors }
  } = useForm<CardFormData>({
    defaultValues: cardToCardFormDataAdapter(card)
  });

  const onSubmit = (data: CardFormData) => {
    setIsLoading(true);
    card
      ? cardService
          .updateCard({ ...cardFormDataToCardAdapter(data), id: card.id })
          .then(hideModal)
          .finally(() => setIsLoading(false))
      : cardService
          .addCard(cardFormDataToCardAdapter(data))
          .then(hideModal)
          .finally(() => setIsLoading(false));
  };

  const onDelete = (id: number) => {
    setIsLoading(true);
    cardService
      .deleteCard(id)
      .then(hideModal)
      .finally(() => setIsLoading(false));
  };

  const onActiveStatusChange = (id: number) => {
    setIsLoading(true);
    cardService.setActive(id).finally(() => setIsLoading(false));
  };

  console.log(cardService.cards$);

  return (
    <Form maxWidth="300px" onSubmit={handleSubmit(onSubmit)}>
      {isLoading && <Loader />}
      <Text type="header" textAlign="center">
        Карта
      </Text>
      <CardItem card={getValues()} isActive />
      <Input
        type="integer"
        preventPaste
        label="Номер"
        value={watch('number')}
        error={errors.number?.message}
        maxLength={16}
        {...register('number', {
          required: 'Это поле обязательно',
          minLength: { value: 16, message: 'Номер должен содержать 16 цифр' }
        })}
      />
      <Input
        type="english"
        preventPaste
        label="Владелец"
        value={watch('owner')}
        error={errors.owner?.message}
        {...register('owner', {
          required: 'Это поле обязательно'
        })}
      />
      <Row>
        <Input
          type="integer"
          preventPaste
          label="Месяц"
          value={watch('month')}
          error={errors.month?.message}
          {...register('month', {
            required: 'Это поле обязательно'
          })}
        />
        <Input
          type="integer"
          preventPaste
          label="Год"
          value={watch('year')}
          error={errors.year?.message}
          {...register('year', {
            required: 'Это поле обязательно'
          })}
        />
      </Row>
      <Row>
        <Button type="submit">{card ? 'СОХРАНИТЬ' : 'ДОБАВИТЬ'}</Button>
        {card?.id && (
          <>
            <CheckboxIcon checked={card.isActive} onClick={() => onActiveStatusChange(card?.id)} />
            <DeleteIcon onClick={() => onDelete(card?.id)} />
          </>
        )}
      </Row>
    </Form>
  );
};
