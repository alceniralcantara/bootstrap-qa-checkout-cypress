import Ajv from 'ajv';
import schema from '../../apis/contracts/product.schema.json';

const ajv = new Ajv();

describe('API Contract - Products', () => {
  it('GET /products returns list matching schema', () => {
    cy.request('https://fakestoreapi.com/products', {failOnStatusCode: false}).then((res) => {
      expect(res.status).to.eq(200);
      const validate = ajv.compile({ type: 'array', items: schema as any });
      expect(validate(res.body)).to.be.true;
    });
  });

  it('GET /products/:id returns product matching schema', () => {
    cy.request('https://fakestoreapi.com/products/1', {failOnStatusCode: false}).then((res) => {
      expect(res.status).to.eq(200);
      const validate = ajv.compile(schema as any);
      expect(validate(res.body)).to.be.true;
      expect(res.body.price).to.be.greaterThan(0);
    });
  });
});
