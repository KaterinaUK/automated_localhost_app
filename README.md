# automated_localhost_app
API automation using Python and requests library and cypress automation for the FE app

Main goals for the project:
- Identify the areas of the project that require testing.
- Write test cases that cover all possible scenarios and edge cases.
- Execute the test cases and record the results.

## Project Description
End-to-end tests for the following scenarios are included in this project:
- Submit correct Transaction Hash and verify the page
- Submit incorrect Transaction Hash and verify the page

API test build in Python using requests library to verify a POST request

## The project uses the following best practices and tools for automated testing:

- Cypress as the test automation framework.
- TypeScript as the programming language.
- Cypress Testing Library for writing tests in a concise and maintainable manner.
- Page Object Model for organizing the tests into maintainable components.
- Behavior Driven Development (BDD) / Cucumber Style Syntax using cypress-cucumber-preprocessor for writing tests in a human-readable format.
- Reusable functions and test steps to make tests easy to maintain and scalable.
- Data Driven Testing to reduce repetitive code.

# Front-End-Tests


## Prerequisites

FOLLOW THESE INSTRUCTIONS CAREFULLY:

1.  The following repo cloned: https://github.com/KaterinaUK/automated_localhost_app
2.  Following this README file

Make sure that you started an application and you can access http://localhost:3000/

- Open terminal and run

  `npm install`

To start the tests, run the following command:

if you want to see the browser - `npm run cypress:open`

to run in headless mode - `npm run cypress:run`

# API Tests

## Prerequisites

Before running the tests for this application, please make sure that the following prerequisites are met:

- The application should be running
- Python is installed

## Installing Requests Library

To install the requests library, please run the following command:

`python3 -m pip install requests`

This will install the necessary package required for running the tests.

## Running Tests

To run the tests for this application, first navigate to the 'api_tests' folder and run the following command:

`npm test`

This command will run the test suite and provide the results of the tests. Please ensure that the application is running before running the tests.
