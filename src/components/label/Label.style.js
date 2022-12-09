import styled from 'styled-components';
import * as LabelPrimitive from '@radix-ui/react-label';

export const LabelContainer = styled('div')`
  display: flex;
  flex-direction: row;
  padding-top: 50px;
  flex-wrap: wrap;
  width: 1000px;
`;

export const StyledLabel = styled(LabelPrimitive.Root)`
  font-family: 'Playfair Display';
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.155em;
  padding-bottom: 20px;
  color: #9caf88;
`;

export const Flex = styled('div')`
  display: flex;
  flex-direction: column;
  width: 196.24px;
  height: 90px;
  padding: 60px;
  padding-bottom: 90px;
`;

export const Input = styled('input')`
  display: flex;
  font-style: normal;
  border: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.155em;
  width: 187.03px;
  height: 40.99px;
  background: #ebefe7;
  color: #173f35;
  border-radius: 13px 30px 30px 50px;
`;
