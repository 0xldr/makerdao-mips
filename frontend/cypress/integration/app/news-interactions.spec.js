describe('Test News Interactions', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should render the news UI above the page',()=>{
    cy.get('app-list-page app-news').should('be.visible')

    cy.get('app-list-page app-news').find('.container').each($container=>{
      if (Cypress.$($container).hasClass('container-green')){
        cy.wrap($container).find('.item-icon-green').should('exist')
      }

      if (Cypress.$($container).hasClass('container-yellow')){
        cy.wrap($container).find('.item-icon-yellow').should('exist')
      }

      if (Cypress.$($container).hasClass('container-red')){
        cy.wrap($container).find('.item-icon-red').should('exist')
      }

      cy.wrap($container).find('.item-title').should('be.visible')
      cy.wrap($container).find('.item-description').should('be.visible')

    })
  })

  it('should render the news UI above the page on dark modw',()=>{
    cy.get('div.darkModeToggler').click()
    cy.get('app-list-page app-news').should('be.visible')

    cy.get('app-list-page app-news').find('.container-dark').each($container=>{
      if (Cypress.$($container).hasClass('container-green')){
        cy.wrap($container).find('.item-icon-green').should('exist')
      }

      if (Cypress.$($container).hasClass('container-yellow')){
        cy.wrap($container).find('.item-icon-yellow').should('exist')
      }

      if (Cypress.$($container).hasClass('container-red')){
        cy.wrap($container).find('.item-icon-red').should('exist')
      }

      cy.wrap($container).find('.item-title').should('be.visible')
      cy.wrap($container).find('.item-description-dark').should('be.visible')

    })
  })

  it('should render the news UI above the page on Spanish language',()=>{
    cy.get('a.language-menu').click()
    cy.get('div.language-menu').find('app-menu').eq(0).click()

    cy.get('app-list-page app-news').should('be.visible')

    cy.get('app-list-page app-news').find('.container').each($container=>{
      if (Cypress.$($container).hasClass('container-green')){
        cy.wrap($container).find('.item-icon-green').should('exist')
      }

      if (Cypress.$($container).hasClass('container-yellow')){
        cy.wrap($container).find('.item-icon-yellow').should('exist')
      }

      if (Cypress.$($container).hasClass('container-red')){
        cy.wrap($container).find('.item-icon-red').should('exist')
      }

      cy.wrap($container).find('.item-title').should('be.visible')
      cy.wrap($container).find('.item-description').should('be.visible')

    })
  })

  it('should render the news UI above the page on dark modw with spanish language',()=>{
    cy.get('a.language-menu').click()
    cy.get('div.language-menu').find('app-menu').eq(0).click()

    cy.get('div.darkModeToggler').click()
    cy.get('app-list-page app-news').should('be.visible')

    cy.get('app-list-page app-news').find('.container-dark').each($container=>{
      if (Cypress.$($container).hasClass('container-green')){
        cy.wrap($container).find('.item-icon-green').should('exist')
      }

      if (Cypress.$($container).hasClass('container-yellow')){
        cy.wrap($container).find('.item-icon-yellow').should('exist')
      }

      if (Cypress.$($container).hasClass('container-red')){
        cy.wrap($container).find('.item-icon-red').should('exist')
      }

      cy.wrap($container).find('.item-title').should('be.visible')
      cy.wrap($container).find('.item-description-dark').should('be.visible')

    })
  })

})
