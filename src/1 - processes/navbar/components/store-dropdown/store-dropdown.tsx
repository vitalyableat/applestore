import { FC } from 'react';
import { RouteNames } from '@app/router';
import { ProductTypeEnum } from '@entities/product/types';
import { Column, Divider } from '@shared/ui';
import * as S from './store-dropdown.styles';
import { StoreDropdownProps } from './store-dropdown.types';
import { StoreSearch } from './store-search';

export const StoreDropdown: FC<StoreDropdownProps> = ({
  isStoreDropdownOpen,
  setIsStoreDropdownOpen
}) => {
  return (
    <S.StoreDropdown
      isOpen={isStoreDropdownOpen}
      onMouseOver={() => setIsStoreDropdownOpen(true)}
      onMouseLeave={() => setIsStoreDropdownOpen(false)}
    >
      <Column width="100px" gap="5px">
        {Object.keys(ProductTypeEnum).map((key) => (
          <S.StyledLink
            key={key}
            to={RouteNames.STORE_UNIT.replace(':type', key)}
            onClick={() => setIsStoreDropdownOpen(false)}
          >
            {key}
          </S.StyledLink>
        ))}
      </Column>
      <Divider vertical margin="0 50px" />
      <StoreSearch />
    </S.StoreDropdown>
  );
};
