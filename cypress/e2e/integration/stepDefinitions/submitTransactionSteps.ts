import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SubmitTransactionPage from '../../support/pages/submitTransactionPage';

const submitTransactionPage = new SubmitTransactionPage();

//* ****************************************
// * Description  : This step is used to verify the submit transaction page.
// * Input        : I am on the submit transaction page
// * Output       : I verify the submit transaction page was loaded
// ****************************************

Given('I am on the submit transaction page', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Interview Automation Engineer');
    }
);

//* ****************************************
// * Description  : This step is used to submit a transaction.
// * Input        : I submit a transaction hash provided from data table
// * Output       : I click the submit button
// ****************************************

When('I submit a transaction {string} with the following details', (Hash: string) => {
    submitTransactionPage.typeHash(Hash);
    cy.wrap(Hash).as('Hash');
    submitTransactionPage.clickSubmitButton();
}
);

//* ****************************************
// * Description  : This step is used to verify the transaction details.
// * Input        : I verify the transaction details
// * Output       : I verify the transaction details
// ****************************************

Then('I verify that the correct {string} is displayed on the page', (Amount: string) => {
    submitTransactionPage.verifyTransactionType();
    submitTransactionPage.verifyAmount(Amount);
    submitTransactionPage.verifySenderWallet();
}
);

//* ****************************************
// * Description  : This step is used to verify the failed submission.
// * Input        : I verify the error message
// * Output       : I verify the error message
// ****************************************

Then('I verify that no data is displayed on the page', () => {
    submitTransactionPage.elements.transactionHashHeader().should('not.exist');
    submitTransactionPage.elements.typeIsERC20().should('not.exist');
    submitTransactionPage.elements.amount().should('not.exist');
    submitTransactionPage.elements.senderWallet().should('not.exist');
}
);