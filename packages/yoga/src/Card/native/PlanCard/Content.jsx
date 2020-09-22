import React from 'react';
import styled, { css } from 'styled-components';
import { string, node } from 'prop-types';

import Content from '../Card/Content';
import Text from '../../../Text';
import theme from '../../../Theme/helpers/themeReader';
import Subtitle from './Subtitle';

const Title = styled(Text.H5)`
  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      color: ${plan.title.color};
      margin-bottom: ${plan.title.margin.bottom}px;
    `;
  }}
`;

const Description = styled(Text.Small)`
  height: 40px;

  color: ${theme.components.card.plan.description.color};
`;

const Price = styled.View`
  flex-direction: row;

  ${props => {
    const {
      components: {
        card: { plan },
      },
    } = theme(props);

    return css`
      margin-top: ${plan.price.margin.top}px;
      margin-bottom: ${plan.price.margin.bottom}px;
    `;
  }}
`;

const EnhancePrice = styled.View`
  ${({ align }) => `
    align-self: ${align};
  `}
`;

const PlanCardContent = ({
  title,
  subtitle,
  description,
  currency,
  price,
  period,
  children,
  ...rest
}) => (
  <Content {...rest}>
    {subtitle && <Subtitle>{subtitle}</Subtitle>}
    {title && <Title>{title}</Title>}
    <Description numberOfLines={2}>{description}</Description>
    <Price>
      {currency && (
        <EnhancePrice align="flex-start">
          <Text.Small>{currency}</Text.Small>
        </EnhancePrice>
      )}
      {price && <Text.H1>{price}</Text.H1>}
      {period && (
        <EnhancePrice align="flex-end">
          <Text.Small>{period}</Text.Small>
        </EnhancePrice>
      )}
    </Price>
    {children}
  </Content>
);

PlanCardContent.propTypes = {
  /** Plan name */
  title: string.isRequired,
  /** currency of the current country */
  currency: string.isRequired,
  price: string.isRequired,
  /** period that this price will be charged  */
  period: string.isRequired,
  description: string,
  subtitle: string,
  children: node,
};

PlanCardContent.defaultProps = {
  children: null,
  description: null,
  subtitle: null,
};

PlanCardContent.displayName = 'PlanCard.Content';

export default PlanCardContent;
