import styled from 'styled-components';
import * as Avatar from '@radix-ui/react-avatar';

export const Flex = styled('div')`
  display: flex;
`;

export const StyledAvatar = styled(Avatar.Root)`
  display: flex;
  overflow: hidden;
  width: 90px;
  height: 90px;
  padding: 50px;
`;

export const StyledImage = styled(Avatar.Image)`
  width: 100%;x
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;
