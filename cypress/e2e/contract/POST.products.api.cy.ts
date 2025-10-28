import Ajv from 'ajv';
import schema from '../../apis/contracts/product.schema.json';

const ajv = new Ajv();

describe('API Contract - POST', () => {
  it('POST /products creates product with valid schema', () => {
    cy.request('POST', 'https://fakestoreapi.com/products', {
      title: 'Test Product',
      price: 29.99,
      description: 'QA automation test',
      image: 'https://i.pravatar.cc',
      category: 'electronics'
    }).then((res) => {
      expect(res.status).to.eq(201);
      const validate = ajv.compile(schema as any);
      expect(validate(res.body)).to.be.true;
    });
  });
});
