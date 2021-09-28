package Runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "E:\\SEP21\\bddFrameWork\\src\\main\\java\\Feature", 
		glue={"StepDefination"} ,
		format = {"pretty","html:test-output"},
		monochrome= true,
		dryRun = false
		)
public class TestRunner {

}
