import Layout from '../../components/Layout';
import Link from 'next/link';

const Javascript = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <ol>
          <li>
            <Link href="javascript/objects">
              <a className="nav-link">Objetos</a>
            </Link>
          </li>
          <li>
            <Link href="javascript/arrays">
              <a className="nav-link">Arrays</a>
            </Link>
          </li>
          <li>
            <Link href="javascript/tips">
              <a className="nav-link">Tips</a>
            </Link>
          </li>
        </ol>
      
    </Layout>
  );
};

export default Javascript;