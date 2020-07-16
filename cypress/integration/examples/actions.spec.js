/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('testing', () => {
    cy.window()
      .its("store")
      .invoke("getState")
      .should(res => {
        console.log(res)
      })
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').toMatchSnapshot();
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'SET_TIMER', payload: true })
    })
    cy.wait(5000)
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'SET_TIMER', payload: false })
    }).snapshot()
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').contains(60).snapshot()
    //
  })
})
