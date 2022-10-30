$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/PurchaseFlow.feature");
formatter.feature({
  "line": 3,
  "name": "Purchase Flow",
  "description": "As user want to purchase item",
  "id": "purchase-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PurchaseFlow"
    }
  ]
});
formatter.before({
  "duration": 29287596700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User will short item by Name (Z to A)",
  "description": "",
  "id": "purchase-flow;user-will-short-item-by-name-(z-to-a)",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User open the web page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User input \"standard_user\" as userName and \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User sort product list by \"Name (Z to A)\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User select 2 item in first line",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click shopping chart icon",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User remove top item in list shopping chart",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User checkout the item",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User input \"Dewi\" as setFirstname and \"Kusuma\" as setLastname and \"28772\" as setPostalcode",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click continue",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User will see \"Item total: $7.99\" as expected Item total",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "\"Tax: $0.64\" as expected Tax",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "\"Total: $8.63\" as expected Total",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User click Finish",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User will see \"THANK YOU FOR YOUR ORDER\" as finishing",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyLoginPage()"
});
formatter.result({
  "duration": 2152335399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 44
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 2846427699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 27
    }
  ],
  "location": "PurchaseSteps.selectProductCart(String)"
});
formatter.result({
  "duration": 3887130701,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectitem()"
});
formatter.result({
  "duration": 157912800,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.shoppingChart()"
});
formatter.result({
  "duration": 99637700,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.RemoveItem1()"
});
formatter.result({
  "duration": 76806200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.checkout()"
});
formatter.result({
  "duration": 90799899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dewi",
      "offset": 12
    },
    {
      "val": "Kusuma",
      "offset": 39
    },
    {
      "val": "28772",
      "offset": 67
    }
  ],
  "location": "PurchaseSteps.inputCredential(String,String,String)"
});
formatter.result({
  "duration": 428256000,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.continueCheckout()"
});
formatter.result({
  "duration": 177566300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Item total: $7.99",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.ExpectedItemTotal(String)"
});
formatter.result({
  "duration": 97096200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tax: $0.64",
      "offset": 1
    }
  ],
  "location": "PurchaseSteps.ExpectedTAX(String)"
});
formatter.result({
  "duration": 67889100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total: $8.63",
      "offset": 1
    }
  ],
  "location": "PurchaseSteps.ExpectedTotal(String)"
});
formatter.result({
  "duration": 63381001,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.Finish()"
});
formatter.result({
  "duration": 118566499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 15
    }
  ],
  "location": "PurchaseSteps.done(String)"
});
formatter.result({
  "duration": 69522800,
  "status": "passed"
});
formatter.after({
  "duration": 1458477300,
  "status": "passed"
});
});