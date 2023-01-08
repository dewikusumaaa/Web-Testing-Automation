@PurchaseFlow

Feature: Purchase Flow
  As user want to purchase item

  Scenario: User will ordering product
    Given User open the web page
    When  User input "standard_user" as userName and "secret_sauce" as password
    Then User sort product list by "Name (Z to A)"
    Then User select 2 item in first line
    Then User click shopping chart icon
    Then User remove top item in list shopping chart
    And User checkout the item
    Then User input "Juminten" as setFirstname and "Washington" as setLastname and "200005" as setPostalcode
    And User click continue
    Then User will see "Item total: $7.99" as expected Item total
    And "Tax: $0.64" as expected Tax
    And "Total: $8.63" as expected Total
    Then User click Finish
    Then User will see "THANK YOU FOR YOUR ORDER" as finishing