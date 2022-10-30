package step_definitions;

import com.example.pageObject.InventoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class PurchaseSteps {
    private final WebDriver webDriver;
    public PurchaseSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("User sort product list by \"(.*)\"")
    public void selectProductCart(String sortProduct) throws InterruptedException {
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        Thread.sleep(3000);
        InventoryPage.sortProduct(sortProduct);
    }
    @Then("User select 2 item in first line")
    public void selectitem(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.clickProduct1();
        InventoryPage.clickProduct2();
    }
    @Then("User click shopping chart icon")
    public void shoppingChart(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.ShopChart();
    }
    @Then("User remove top item in list shopping chart")
    public void RemoveItem1(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.removeitem1();
    }
    @And("User checkout the item")
    public void checkout(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.CO();
    }

    @Then("User input \"(.*)\" as setFirstname and \"(.*)\" as setLastname and \"(.*)\" as setPostalcode")
    public void inputCredential(String FirstName, String LastName, String PostalCode){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.setFirstname(FirstName);
        InventoryPage.setLastname(LastName);
        InventoryPage.setPostalcode(PostalCode);
    }
    @And("User click continue")
    public void continueCheckout(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.Continue();
    }

    @Then("User will see \"(.*)\" as expected Item total")
    public void ExpectedItemTotal(String ExpectedItemtotal){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.Itemtotal();
        Assert.assertEquals(ExpectedItemtotal, InventoryPage.Itemtotal());
    }

    @And("\"(.*)\" as expected Tax")
    public void ExpectedTAX(String Expectedtax){
        InventoryPage InvetoryPage = new InventoryPage(webDriver);
        InvetoryPage.Tax();
        Assert.assertEquals(Expectedtax, InvetoryPage.Tax());
    }
    @And("\"(.*)\" as expected Total")
    public void ExpectedTotal(String expectedtotal){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.Total();
        Assert.assertEquals(expectedtotal, InventoryPage.Total());
    }
    @Then("User click Finish")
    public void Finish(){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.FINISH();
    }
    @Then("User will see \"(.*)\" as finishing")
    public void done(String succes){
        InventoryPage InventoryPage = new InventoryPage(webDriver);
        InventoryPage.Succes();
        Assert.assertEquals(succes, InventoryPage.Succes());
    }

}