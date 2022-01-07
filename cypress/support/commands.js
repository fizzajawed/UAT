// // Cypress.Commands.add('generateToken', ({secret}) => {
// //     const totp = require('totp-generator');
// //     const token = totp(secret); 
// //     });
// context('Actions', () => {
//     beforeEach(() => {})
//   })
//     it('Main test', () => {
//         const token ='XXXX'
//         cy.generateToken(token);
//     })




Cypress.Commands.add('login', (username, password) => {

  // cy.get('#ctl00_cphBody_Login1_UserName').type('amsadmin')
  //   cy.get('#ctl00_cphBody_Login1_Password').type('VLCore@21')
  //   cy.get('#ctl00_cphBody_Login1_LoginButton').click()
  cy.get('#txtUsername').type('admin')
    cy.get('#txtPassword').type('admin123')
    cy.get('#btnLogin').click()
    

      })



//  Cypress.Commands.add('logout', () => {

//     cy.get('#welcome').click()
//     cy.get('#welcome-menu > :nth-child(1) > :nth-child(3)').click()

//       })

       