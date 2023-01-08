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
  "duration": 10809849300,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User will ordering product",
  "description": "",
  "id": "purchase-flow;user-will-ordering-product",
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
  "name": "User input \"Juminten\" as setFirstname and \"Washington\" as setLastname and \"200005\" as setPostalcode",
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
  "duration": 470952800,
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
  "duration": 457007400,
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
  "duration": 3424235200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.selectitem()"
});
formatter.result({
  "duration": 198674400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.shoppingChart()"
});
formatter.result({
  "duration": 124566900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.RemoveItem1()"
});
formatter.result({
  "duration": 86126300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.checkout()"
});
formatter.result({
  "duration": 102939900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Juminten",
      "offset": 12
    },
    {
      "val": "Washington",
      "offset": 43
    },
    {
      "val": "200005",
      "offset": 75
    }
  ],
  "location": "PurchaseSteps.inputCredential(String,String,String)"
});
formatter.result({
  "duration": 462638200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.continueCheckout()"
});
formatter.result({
  "duration": 195643200,
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
  "duration": 74476900,
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
  "duration": 76027900,
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
  "duration": 100989300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.Finish()"
});
formatter.result({
  "duration": 101351200,
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
  "duration": 73124900,
  "status": "passed"
});
formatter.after({
  "duration": 3732682100,
  "status": "passed"
});
});