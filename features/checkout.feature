Feature: Checkout

  Scenario: Complete purchase flow
    Given I am logged in as "standard_user"
    And I have added "Sauce Labs Backpack" to the cart
    When I proceed to checkout with firstName "Daniel" lastName "MG" postalCode "15001"
    Then I should see the order confirmation page