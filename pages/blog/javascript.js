import Layout from '../../components/Layout';
import Link from 'next/link';

const Javascript = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <Link href="javascript/objects">
              <a className="nav-link">Objetos</a>
      </Link>
    </Layout>
  );
};

export default Javascript;