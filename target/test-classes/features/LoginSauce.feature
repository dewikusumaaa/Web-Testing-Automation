@Login
Feature: Login
  As user i want to login to the sauce

  Scenario: Normal Login
    Given User open the web page
    When User input "standard_user" as userName and "secret_sauce" as password
    Then  User is already on the landing page

  Scenario Outline: Invalid Login
    Given User open the web page
    When User input "<userName>" as userName and "<password>" as password
    Then User will see "<errorText>" on login page
    Examples:
      | userName        | password     | errorText                                                                 |
      | asd             | secret_sauce | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | qwerty       | Epic sadface: Username and password do not match any user in this service |
      | standard_user   |              | Epic sadface: Password is required                                        |
      |                 | secret_sauce | Epic sadface: Username is required                                        |
      | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
      |                 |              | Epic sadface: Username is required                                                                          |





