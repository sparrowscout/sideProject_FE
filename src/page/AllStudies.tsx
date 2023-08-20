import styled from 'styled-components';

import allStudyPng from '@/style/images/illust_everystudy.png';

function AllStudies() {
  return (
    <Container>
      <Content>
        <Title>
          모든 스터디 탭에서
          <br />곧 만나요!
        </Title>
        <Description>
          '모든 스터디'에서는 스터디를
          <br />
          만들거나, 참여할 수 있어요.
        </Description>
        <Square>
          <img src={allStudyPng} alt="my study" />
        </Square>
        <TipBox>
          <TipTitle>TIP</TipTitle>
          <Comment>
            잠깐! 5분 설문조사 참여하고
            <br />
            이벤트 상품 받아가세요
          </Comment>
        </TipBox>
        <Button>설문조사 참여하기</Button>
      </Content>
    </Container>
  );
}

export default AllStudies;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 75px);
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.bg.base};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 70px 0 40px;
  overflow-y: scroll;
`;

const Title = styled.div`
  width: 248px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.grey[900]};
`;

const Description = styled.div`
  width: 248px;
  text-align: center;
  margin: 20px auto 0;
  line-height: 25px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grey[600]};
`;

const Square = styled.div`
  width: 250px;
  height: 250px;
  margin: 70px auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TipBox = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.bg.mint10};
  border-radius: 16px;
  display: flex;
`;

const TipTitle = styled.div`
  width: 40px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.icon.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.primary[700]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.div`
  margin-left: 16px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.grey[800]};
`;

const Button = styled.div`
  width: calc(100% - 40px);
  height: 48px;
  margin: 20px auto 0;
  color: ${({ theme }) => theme.colors.bg.base};
  background-color: ${({ theme }) => theme.colors.primary[700]};
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  flex-shrink: 0;
`;
