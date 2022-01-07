/// <reference types= "cypress"/>
// context('Actions', () => {
//     beforeEach(() => {})
//   })
//     it('Main test', () => {
//         const token ='XXXX'
//         cy.generateToken(token);
//     })
// context('Actions', () => {
//     beforeEach(() => {})
//   })
//     it('Main test', () => {
//         const token ='XXXX'
//         cy.generateToken(token);
//     })


it('should open application under test', () => {

 cy.visit('https://vlamspr3.spurams.com')
//  cy.get('ctl00$cphBody$Login1$UserName').type('amsadmin')
 cy.get('#ctl00_cphBody_Login1_UserName').type('amsadmin')
 cy.get('#ctl00_cphBody_Login1_Password').type('VLCore@21')
 cy.get('#ctl00_cphBody_Login1_LoginButton').click()
 cy.get('.ez-dropbtn').click() // create new order/
// cy.get('#nav > :nth-child(2) > .dropdown-toggle').click() // drop down
// cy.get('.second-level').click()
cy.get('#ctl00_cphBody_divMultipleOption > [href="AddAppraisal.aspx"]').click() // appraisal
cy.wait(600)

// cy.get('select').select('AB Client')
//cy.get('#ctl00_cphBody_drpLender').select('AB Client').should('have.value','AB Client')
cy.wait(2000)

//cy.get('#ctl00_cphBody_drpTransactionType').should('have.class', 'ready')
// execute the next test command

cy.get('#ctl00_cphBody_drpTransactionType').select('Acquisition').should('be.visible').should('have.value','Acquisition')
cy.wait(70)
//cy.get('#ctl00_cphBody_drpPropertyType').select('Attached').should('have.value','Attached')
cy.get('#ctl00_cphBody_drpAppraisalType').select('1004 conventional').should('have.value','1004 conventional')




// cy.get('#ctl00_cphBody_drpLender').click()
// cy.get('#ctl00_cphBody_drpLender').click()


//  cy.get('#txtPassword').type('admin123')
//  cy.get('#btnLogin').click()
//  cy.get('h1').contains('Dashboard')

// cy.contains('invalid credentials').should('not.exist')
// cy.url('eq', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
})

// it('should open application under test', () => {

//     cy.visit('https://opensource-demo.orangehrmlive.com')
//     cy.fixture('example').then(function(data)
//     {
//     this.data=data
//     // cy.visit('https://vlamspr3.spurams.com')
//     // cy.visit('https://opensource-demo.orangehrmlive.com')
//     cy.login(this.data.username, this.data.password)


    
// })
    
        
    
  
    
    // cy.login('tes','VLCore@21')
    // cy.get('#txtUsername').type('admin')
    // cy.get('#txtPassword').type('admin123')
    // cy.get('#btnLogin').click()
  
    // cy.contains('Invalid credentials').should('not.exist')
    


    
//})

//    it('should logout', () =>
//    {

//     cy.logout()
//    }
