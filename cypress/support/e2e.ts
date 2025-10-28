beforeEach(() => {
  // Example: seed product before each test
  cy.request('POST', 'https://fakestoreapi.com/products', {
    title: 'Seed Product',
    price: 19.99,
    description: 'Seeded by Cypress',
    image: 'https://i.pravatar.cc',
    category: 'books'
  }).then((res) => {
    Cypress.env('seedProductId', res.body.id);
  });
});
