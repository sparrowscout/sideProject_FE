import styled, { css } from 'styled-components';

interface MainCharacterBoxProps {
  character: {
    codeNum: number;
    characterImg: string;
    requirement: string;
  };
}

const MainCharacterBox: React.FC<MainCharacterBoxProps> = ({ character }) => {
  return (
    <Container>
      <MainText>나의 프로필</MainText>
      <SubText>
        모은 캐릭터 중 하나를 내 대표 프로필로 선택할 수 있어요.
      </SubText>
      <Center margin>
        <CharacterBox>
          <img src={character.characterImg} alt={'대표이미지'} />
        </CharacterBox>
      </Center>
      <Center>
        <Title>달성한 목표</Title>
        <Text>{character.requirement}</Text>
      </Center>
    </Container>
  );
};

export default MainCharacterBox;

const Container = styled.div`
  background-color: white;
  padding: 24px 20px;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;

const MainText = styled.div`
  font-family: 'SpoqaMedium';
  font-size: 1.25rem;
  text-align: center;
`;

const SubText = styled.div`
  font-size: 0.75rem;
  width: 150px;
  margin: 1rem auto 0;
  text-align: center;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.grey[500]};
`;

const Center = styled.div<{
  margin?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.margin &&
    css`
      margin: 20px 0 16px;
    `}
`;

const Title = styled.div`
  padding: 0.5rem;
  background-color: #f6f6f6;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.grey[600]};
`;
const Text = styled.div`
  font-family: 'SpoqaMedium';
  font-size: 0.875rem;
  margin-left: 0.5rem;
`;

const CharacterBox = styled.div`
  width: 140px;
  height: 140px;
  background-color: #e9faf7;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;
