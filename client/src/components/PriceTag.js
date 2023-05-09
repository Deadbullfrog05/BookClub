<<<<<<< HEAD
import { HStack, Text, useColorModeValue as mode } from '@chakra-ui/react'
export function formatPrice(value, opts = {}) {
  const { locale = 'en-US', currency = 'USD' } = opts
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: 'currency',
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}

export const PriceTag = (props) => {
  const { price, currency, salePrice, rootProps, priceProps, salePriceProps } = props
=======
import {HStack, Text, useColorModeValue as mode} from "@chakra-ui/react";
export function formatPrice(value, opts = {}) {
  const {locale = "en-US", currency = "INR"} = opts;
  const formatter = new Intl.NumberFormat(locale, {
    currency,
    style: "currency",
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
}

export const PriceTag = (props) => {
  const {price, currency, salePrice, rootProps, priceProps, salePriceProps} =
    props;
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
  return (
    <HStack spacing="1" {...rootProps}>
      <Price isOnSale={!!salePrice} textProps={priceProps}>
        {formatPrice(price, {
          currency,
        })}
      </Price>
      {salePrice && (
        <SalePrice {...salePriceProps}>
          {formatPrice(salePrice, {
            currency,
          })}
        </SalePrice>
      )}
    </HStack>
<<<<<<< HEAD
  )
}
const Price = (props) => {
  const { isOnSale, children, textProps } = props
  const defaultColor = mode('gray.700', 'gray.400')
  const onSaleColor = mode('gray.400', 'gray.700')
  const color = isOnSale ? onSaleColor : defaultColor
=======
  );
};
const Price = (props) => {
  const {isOnSale, children, textProps} = props;
  const defaultColor = mode("gray.700", "gray.400");
  const onSaleColor = mode("gray.400", "gray.700");
  const color = isOnSale ? onSaleColor : defaultColor;
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={color}
<<<<<<< HEAD
      textDecoration={isOnSale ? 'line-through' : 'none'}
=======
      textDecoration={isOnSale ? "line-through" : "none"}
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
      {...textProps}
    >
      {children}
    </Text>
<<<<<<< HEAD
  )
}
const SalePrice = (props) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')} {...props} />
)
=======
  );
};
const SalePrice = (props) => (
  <Text
    as="span"
    fontWeight="semibold"
    color={mode("gray.800", "gray.100")}
    {...props}
  />
);
>>>>>>> fa89b8e485d8e9c8fba43cf011894449d31eceb3
