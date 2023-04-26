import NextLink from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Best Pick Food - Khởi đầu từ Việt Nam, nay cất cánh vươn tầm thế giới</OverTitle>
          <SectionTitle>Lời đầu tiên, tôi xin gửi đến Quý khách hàng, Quý đối tác lời cảm ơn vì đã tin tưởng và đồng hành cùng Best Pick Food trong hơn 2 thập kỷ qua.</SectionTitle>
          <Description>
          Phát huy năng lực cốt lõi và tận dụng sức mạnh của công nghệ sản xuất tiên tiến, chúng tôi vô cùng tự hào khi sản phẩm Nutifood không chỉ đồng hành cùng Chính phủ trong việc giải quyết vấn đề dinh dưỡng quốc gia mà còn trở thành lựa chọn số một của hàng triệu gia đình trên khắp Việt Nam. Kết quả đạt được là niềm vinh dự của mỗi cán bộ công nhân viên Nutifood và là động lực để chúng tôi tiếp tục nỗ lực cống hiến cho cộng đồng
          </Description>
          <ButtonGroup>
            <NextLink href="#early-access" passHref>
              <Button>
                Sản phẩm <span>&rarr;</span>
              </Button>
            </NextLink>
            <NextLink href="#whitepaper" passHref>
              <OutlinedButton transparent>
                Trợ giúp <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </ButtonGroup>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
`;
