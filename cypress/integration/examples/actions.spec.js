/// <reference types="cypress" />
import { setTimer, clearTimer } from '../../../src/actions/setTimer'

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
    cy.get('#counter').contains('60').snapshot()
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'SET_TIMER', payload: true })
    })
    cy.wait(5000)
    cy.get('#counter').contains('56').snapshot()
    cy.window().its('store').then((store) => {
      store.dispatch({ type: 'CLEAR_TIMER', payload: false })
    })
    cy.get('#counter').contains('60').snapshot()
  })
})
