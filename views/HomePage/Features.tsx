import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Best Pick Food F&B',
    description:
      'Nâng cao tầm vóc và chất lượng cuộc sống cho người Việt Hướng đến sản phẩm chất lượng chuẩn toàn cầu. Kết hợp cùng 20 năm thấu hiểu thể trạng đặc thù người Việt',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Best Pick Food F&B',
    description:
      'Nâng cao tầm vóc và chất lượng cuộc sống cho người Việt Hướng đến sản phẩm chất lượng chuẩn toàn cầu. Kết hợp cùng 20 năm thấu hiểu thể trạng đặc thù người Việt',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Best Pick Food F&B',
    description:
      'Có một nơi để về, đó là nhà. Có những người để yêu thương, đó là gia đình. Có được cả hai, đó là hạnh phúc. Một cuộc đời hạnh phúc cần có sự bình yên tâm hồn',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
