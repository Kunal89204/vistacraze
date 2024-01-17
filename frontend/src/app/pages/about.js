// pages/about.js
import AboutLayout from '@/components/animate';
import { fetchData } from '@/path/to/utils/api';

const AboutPage = ({ data }) => {
  return (
    <AboutLayout>
      <div>
        {/* Render your page content using the fetched data */}
        <h1>About Page</h1>
        <p>{data.someValue}</p>
      </div>
    </AboutLayout>
  );
};

export async function getStaticProps() {
  // Fetch data during build time
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

export default AboutPage;
