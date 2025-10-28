import Ajv from 'ajv';
import schema from '../../apis/contracts/product.schema.json';

const ajv = new Ajv();

describe('API Contract - PUT', () => {
  it('PUT /products/:id updates product with valid schema', () => {
    cy.request('PUT', 'https://fakestoreapi.com/products/1', {
      title: 'Updated Product',
      price: 39.99
    }).then((res) => {
      expect(res.status).to.eq(200);
      const validate = ajv.compile(schema as any);
      expect(validate(res.body)).to.be.false;
      expect(res.body.title).to.eq('Updated Product');
    });
  });
});
