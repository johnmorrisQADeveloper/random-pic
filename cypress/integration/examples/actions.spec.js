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
    cy.log('first snapshot')
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').snapshot();
    cy.wrap({ foo: 42 }).snapshot()
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'SET_TIMER', payload: true })
    })
    cy.wait(5000)
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').snapshot();
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'SET_TIMER', payload: false })
    })
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').snapshot()
    cy.get(':nth-child(1) > :nth-child(1) > .ui > .red > .value').snapshot()

    //
  })
})
