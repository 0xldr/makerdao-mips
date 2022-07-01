Given('The user opens the main page',()=>{
  cy.visit('')
})


When('Types ${string} in the search bar plus Esc and Enter',(tag)=>{
  cy.get('[data-cy=search-input]').clear().type(`$ #${tag}{esc}{enter}`);
})

Then('The found MIps should contain the tag {string}',(tag)=>{
  cy.forEach('tr[data-cy=search-result], tr[data-cy=subporposal-row]', ($el) => {
    cy.wrap($el).click();
    cy.get('[data-cy=details-tags]').should('contain', tag);
    cy.go('back');
  })
})
