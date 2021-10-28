import Layout from '../../../components/Layout';

const Functions = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <h3>Functions</h3>
      <ol>
        <li>
          <p>Function Declaration</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`function add(value1, value2){
    return value1 + value2;
}`}</code>
          </pre>
        </li>
        <li>
          <p>Function Expression</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const add = function(value1, value2){
    return value1 + value2;
}`}</code>
          </pre>
        </li>
        <li>
          <p>Diferencias entre una funcion y un metodo</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const number = 1;
const number2 = '2';
parseInt(number2); // Esto es una funcion
number.toString(); // Esto es un metodo`}</code>
          </pre>
          <p>La diferencia radica en que un metodo hace parte de una variable o de un objeto, en este caso primero se usa la variable number y luego se llama su metodo toString()</p>
        </li>
        </ol>
    </Layout>
  );
};

export default Functions;