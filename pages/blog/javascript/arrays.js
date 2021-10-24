import Layout from '../../../components/Layout';

const Arrays = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <h3>Arrays</h3>
      <ol>
        <li>
          <p>Creación de arrays</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const languages = [{language:'Javascript', framework: 'React'}, 'PHP']; // Aceptan diferentes tipos de datos`}
            </code>
          </pre>
        </li>
        <li>
          <p>Agregar elementos a un array</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`languages.push('Java'); // Agrega el elemento al final del array
languages.unshift('Python'); // Agrega el elemento al inicio del arreglo`}
            </code>
          </pre>
        </li>
        <li>
          <p>Agregar elementos a un array con spread operator</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`let backendLanguages = [...languages, 'Go']; // El spread saca el valor del arreglo y lo permite mezclar con el nuevo`}
            </code>
          </pre>
        </li>
        <li>
          <p>Eliminar elementos a un array</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`languages.pop('Java'); // Elimina el elemento al final del array
languages.shift('Python'); // Elimina el elemento al inicio del arreglo
languages.splice(1, 1); //El primer parametro es el indice desde donde se quiere eliminar y el segundo es cuantos elementos a partir de ese indice `}
            </code>
          </pre>
        </li>
        <li>
          <p>Destructuring de un array</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const laptops = ['msi', 'hp', 'dell', 'lenovo'];
const [ gaming, , ...corporateLaptops] = laptops;
console.log(gaming); // 'msi'
console.log(corporateLaptops); // ['dell','lenovo']`}
            </code>
          </pre>
        </li>
        <li>
          <p>Diferencia entre map y forEach</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const laptops = ['msi', 'hp', 'dell', 'lenovo'];
const newLaptops = laptops.map( product => Brand `+"${product}"+`); // Crea un nuevo arreglo 
const newLaptops2 = laptops.forEach( product => Brand `+"${product}"+`); // Hace la iteracion pero su return es undefined`}
            </code>
          </pre>
        </li>
        </ol>
    </Layout>
  );
};

export default Arrays;