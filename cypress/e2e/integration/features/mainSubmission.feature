Feature: Submit Transaction and verify the page
Scenario Outline: Submit correct Transaction Hash and verify the page
    Given I am on the submit transaction page
    When I submit a transaction "<Hash>" with the following details
    Then I verify that the correct "<Amount>" is displayed on the page

    Examples: 
        | Amount             | Hash                                                               |
        | 2.4029381585039946 | 0xbe286d0528d0ee55c307fae43b9cd0552d329ba6f9e6b71178402a6efe620dfb |

Scenario Outline: Submit incorrect Transaction Hash and verify the page
    Given I am on the submit transaction page
    When I submit a transaction "<Hash>" with the following details
    Then I verify that no data is displayed on the page

    Examples: 
        | Amount             | Hash    |                 
        | 2.4029381585039946 | 0xbe286 |