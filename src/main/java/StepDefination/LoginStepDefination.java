package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {

	WebDriver driver; 
	
	@Given("^User is on Login page$")
	public void user_is_on_Login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\\\SEP21\\\\bddFrameWork\\\\Driver\\\\chromedriver.exe");
	   driver = new ChromeDriver();
	   driver.get("https://classic.freecrm.com/login.cfm");
		
	}

	

	@When("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_and(String UserName, String Password) throws Throwable {
		 WebElement userName =   driver.findElement(By.xpath("//input[@name='username']"));
		  userName.sendKeys(UserName);
		  WebElement password =   driver.findElement(By.xpath("//input[@name='password']"));
		  password.sendKeys(Password);
	}

	@When("^Click the login button$")
	public void click_the_login_button() throws Throwable {
	    WebElement button = driver.findElement(By.xpath("//input[@type='submit']"));
	    button.click();

	}

	
	  @Then("^user should be able to login to home page$") public void
	  user_should_be_able_to_login_to_home_page() throws Throwable { 
  String title=driver.getTitle(); System.out.println(title);
	  Assert.assertEquals(title,"CRMPRO");
	  
	  }
	 


}
