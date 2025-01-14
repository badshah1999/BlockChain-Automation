/// <reference types="Cypress" />
import Sample from "../Pages/Sample";
import { ROUTES } from "../constant/endpoint";
describe('Transaction', () => { 
    let testData
    before(()=>{
        cy.fixture('example').then((data)=>{
            testData = data
        })
    })
    beforeEach(()=>{
        cy.visit(ROUTES.TRANSACTION)
    })
    it('verify the header has expected text',()=>{
        Sample.getHeader().should('have.text',testData.headerText)
    })
    it('Print the transaction hash where input is 1 and output is 2',()=>{
        Sample.getHashKeyHeader().each(($header) => {
            cy.log($header.text())    
        });  
    })
})