import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Page from 'components/Page';
import SectionTitle from 'components/SectionTitle';
import YoutubeVideo from 'components/YoutubeVideo';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Nông trường cà phê huyền thoại với 100 năm lịch sử .',
    description:
      'Nông trường cà phê CADA (COMPAGNIE AGRICOLE D’ASIE) tọa lạc tại huyện Krông Pắk, Đắk Lắk từ lâu được biết đến là vùng đất nổi tiếng trên “bản đồ cà phê” Việt Nam. Với diện tích ban đầu 260 ha, CADA được người Pháp chọn là nơi đặt cây cà phê Robusta đầu tiên vào năm 1922 khi phát hiện điều kiện tự nhiên về thổ nhưỡng và khí hậu tại nơi đây vô cùng thích hợp để cho ra các hạt cà phê Robusta tuyệt hảo',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Ứng dụng thành tựu khoa học thế giới nâng tầm vóc Việt',
    description:
      'Nơi quy tụ đội ngũ chuyên gia hàng đầu thế giới ứng dụng thành tựu khoa học hiện đại phát triển các giải pháp dinh dưỡng chuẩn Châu Âu đáp ứng dinh dưỡng đặc thù của người Việt.',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Công nghệ tân tiến giữ trọn dinh dưỡng & gói lại tâm huyết trong mỗi sản phẩm.',
    description:
      ' nhà máy ở Việt Nam và 1 nhà máy ở Thụy Điển đều trang bị máy móc từ các quốc gia có trình độ khoa học kỹ thuật phát triển cao như Nhật Bản, Đức, Thụy Điển. Nhờ đó, sản phẩm đầu ra đều đạt được các chứng nhận quan trọng quốc tế về tiêu chí chất lượng như ISO 9001, FDA, HACCP, GMP',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 8 Hecta với công suất mỗi năm 200 triệu lít sữa nước, 31.000 tấn sữa bột',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 2 Hecta, sản xuất cho tất cả sản phẩm của tập đoàn',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 12 Hecta chuyên sản xuất các mặt hàng sữa nước, sữa bột pha sẵn, sữa đậu nành với dây chuyền sản xuất đạt công suất 24.000 hộp/ giờ',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 14 Hecta sản xuất cho tất cả sản phẩm và cà phê với tổng công suất 50.000 tấn sữa bột/ năm',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 8 Hecta với công suất mỗi năm 200 triệu lít sữa nước, 31.000 tấn sữa bột',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: '6 nhà máy công nghệ hiện đại trải dọc Việt Nam ',
    description:
      'Diện tích 7 Hecta sản xuất cho dòng sản phẩm sữa nước với công suất chế biến 500 triệu lít/ năm      ',
  },
];

export default function FeaturesPage() {
  return (
    <Page title="Features" description="Elit aute do nisi Lorem id ea culpa sint duis eu tempor dolore elit.">
      <Wrapper>
        <SectionTitle>Xem thêm trên youtube của chúng tôi</SectionTitle>
        <YoutubeVideo url="https://www.youtube.com/watch?v=BggrpKfqh1c" />
        <CustomAutofitGrid>
          {FEATURES.map((singleFeature, idx) => (
            <BasicCard key={singleFeature.title} {...singleFeature} />
          ))}
        </CustomAutofitGrid>
      </Wrapper>
    </Page>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 10rem;
  }
`;

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
