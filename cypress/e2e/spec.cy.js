
describe('homePage test', () => {
  before(() => {
    cy.visit('localhost:3000/contents/homePage')
    cy.viewport(320, 480)
    cy.viewport('iphone-5')
  })
  beforeEach(() => {
  })
  it('正确显示首页内容', () => {
    cy.get('.footer_icon___WayJ').first().should('contain','')
  })
})