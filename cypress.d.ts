/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Visit the blank test page. This should be in a `before` block of every test page. This command will load the iframe.html
     * file. It is meant to be used with `cy.loadStory`
     */
    visitStorybook(): Cypress.Chainable<Window>

    /**
     * Load a story. This will invoke the storybook router,
     * unmount a previous story, mount the current story and force a rerender
     * This should be in a `beforeEach` block to force a fresh new story
     * @param categorization Categorization information found in the `.storiesOf` function or `title` - usually used for menu navigation
     * @param story Variant of the story example in the `.add` function or the export name
     * @example
     * cy.loadStory('Button', 'Primary')
     */
    loadStory(categorization: string, story: string): Cypress.Chainable<JQuery>
  }
}
