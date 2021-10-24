import Layout from '../../../components/Layout';

const Tips = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <h3>Tips</h3>
      <ol>
        <li>
          <p>Console.table</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const languages = [{language:'Javascript', framework: 'React'}, 'PHP', 'Python'];
console.table(languages)  // Imprime una tabla con los valores, sus indices y si hay un objeto imprime las llaves tambien`}</code>
          </pre>
        </li>
        </ol>
    </Layout>
  );
};

export default Tips;