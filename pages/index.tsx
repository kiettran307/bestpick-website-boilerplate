import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <Partners />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="KẾT HỢP CÙNG NỖ LỰC KHÔNG NGỪNG." overTitle="KẾT HỢP CÙNG NỖ LỰC KHÔNG NGỪNG">
            <p>
            XÂY DỰNG VÀ SỞ HỮU VÙNG NGUYÊN LIỆU BỀN VỮNG. {' '}
              <Link href="/help-center">Vùng nguyên liệu chuẩn mực, đảm bảo tiêu chí sạch và tốt tự nhiên, vốn là yếu tố quan trọng cho chất lượng sản phẩm vượt trội.?</Link> Nhờ hệ thống dây chuyền sản xuất hiện đại, sản phẩm của Nutifood đạt tiêu chuẩn cao về an toàn cho sức khỏe, giữ trọn vẹn dưỡng chất từ các nguyên liệu tự nhiên cùng sự thơm ngon tươi mới. Sản phẩm đều đạt các chứng nhận tiêu chuẩn chất lượng quốc tế như ISO, FDA, HALAL, HACCP.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Best Pick Food F&B." overTitle="Best Pick F&B" reversed>
            <p>
            TẤT CẢ KẾT TINH THÀNH NHỮNG GIẢI PHÁP DINH DƯỠNG CHUYÊN BIỆT CHO MỌI LỨA TUỔI{' '}
              <strong>Mỗi sản phẩm đều là thành quả của tâm huyết, ứng dụng nghiên cứu khoa học</strong>. sử dụng nguồn nguyên liệu sạch và tự nhiên, trên nền tảng công nghệ sản xuất hiện đại
            </p>
            <ul>
              <li>Trẻ em 0 - 6 tuổi dòng đặc trị</li>
              <li>Trẻ em 6 - 12 tuổi </li>
              <li>Giới trẻ</li>
              <li>Cho gia đình</li>
            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <Cta />
          <FeaturesGallery />
          <Features />
          <Testimonials />
          <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
