import { StyledAvatar, StyledImage, Flex } from './Avatar.style';

export function Avatar(props) {
  const { profilephoto } = props;

  return (
    <Flex>
      <StyledAvatar>
        <StyledImage src={profilephoto} alt="Colm Tuite" />
      </StyledAvatar>
    </Flex>
  );
}
