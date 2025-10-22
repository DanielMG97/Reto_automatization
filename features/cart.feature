Feature: Cart functionality
Scenario: Add product to cart and view it
    Given I am logged in as "standard_user"
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart should contain 1 item
    And the cart page should show "Sauce Labs Backpack"