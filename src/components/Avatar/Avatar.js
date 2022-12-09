import { StyledAvatar, StyledImage, Flex } from './Avatar.style';

export function Avatar() {
  return (
    <Flex>
      <StyledAvatar>
        <StyledImage
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
          alt="Colm Tuite"
        />
      </StyledAvatar>
    </Flex>
  );
}
