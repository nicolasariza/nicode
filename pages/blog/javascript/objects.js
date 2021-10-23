import Layout from '../../../components/Layout';

const Javascript = () => {
  return (
    <Layout>
      <h1>Javascript</h1>
      <h3>Objetos</h3>
      <ol>
        <li>
          <p>Creación de objetos</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">{`const product = {
    name: 'car',
    price: 40000,
    description: {
        speed: 200
    }
}`}</code>
          </pre>
        </li>
        <li>
          <p>Agregar y eliminar propiedades</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`product.brand = 'Dodge'; // Agregar
delete product.price; // Eliminar`}
            </code>
          </pre>
        </li>
        <li>
          <p>Destructuring</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`const { price, description: { speed }} = product;`}
            </code>
          </pre>
        </li>
        <li>
          <p>Congelar un objeto</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`Object.freeze(product)  // No permite ninguna modificación`}
            </code>
          </pre>
        </li>
        <li>
          <p>Sellar un objeto</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`Object.seal(product) // Solo permite modificar llaves existentes en el objeto`}
            </code>
          </pre>
        </li>
        <li>
          <p>Object constructor</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`function Product(name, price) {
  this.name = name;
  this.price = price;
}
                
const product2 = new Product('TV',250)`}
            </code>
          </pre>
        </li>
        <li>
          <p>Object keys</p>
          <strong>Ejemplo:</strong>
          <pre>
            <code className="language-js">
              {`Object.keys(product2); // ['name', 'price'] `}
            </code>
          </pre>
        </li>
      </ol>
    </Layout>
  );
};

export default Javascript;