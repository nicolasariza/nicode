import Layout from '../../components/Layout';

const Css = () => {
  return (
    <Layout>
      <h1>Css</h1>
      <h3>Ejemplos de selectores</h3>
      <ol>
        <li>
          <p>Selectores por etiqueta</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-css">{`p {color:blue}`}</code>
          </pre>
        </li>
        <li>
          <p>Selectores avanzados</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-css">
              {`a[href="nicode.com"] {color:blue}`}
            </code>
          </pre>
        </li>
      </ol>
      <h3>Fuentes</h3>
      <p>
        Es recomendable usar la siguiente propiedad para las páginas responsive:
      </p>
      <strong>Ejemplo:</strong>
      <pre>
        <code className="language-css">
          {`white-space: pre-line`}
        </code>
      </pre>
    </Layout>
  );
};

export default Css;
