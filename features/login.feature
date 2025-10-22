Feature: Login

  Scenario: Successful login with valid credentials
    Given I open the Sauce Demo login page
    When I login with "standard_user" and "secret_sauce"
    Then I should see the products page

  Scenario: Login fails with locked_out_user
    Given I open the Sauce Demo login page
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see a locked out error message