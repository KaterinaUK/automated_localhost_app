export default class SubmitTransactionPage {
    elements = {
        transactionHashHeader: () => cy.findByLabelText(/Transaction Hash/i),
        transactionHashInput: () => cy.findByTestId(/hash-input-field/i),
        submitButton: () => cy.findByRole('button', { name: /submit/i }),
        typeIsERC20: () => cy.findByText(/ERC20_TRANSFER/i),
        amount: () => cy.findByText(/amount/i),
        senderWallet: () => cy.findByText(/From/i),

    }

    typeHash(hash: string) {
        this.elements.transactionHashInput().should('be.empty').type(hash);
    }

    clickSubmitButton() {
        this.elements.submitButton().should('be.enabled').click();
    }

    verifyTransactionType() {
        this.elements.typeIsERC20().should('be.visible');
    }

    verifyAmount(Amount: string) {
        this.elements.amount().should('be.visible');
        this.elements.amount().should('contain', Amount);
    }

    verifySenderWallet() {
        this.elements.senderWallet().should('be.visible');
    }
}
