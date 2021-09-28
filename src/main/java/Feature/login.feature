Feature: Free CRM Login feature

#Scenario: Free CRM Login for valid user

#Given User is on Login page 
#When user enter "batchautomation" and "Test@12345"
#And Click the login button
#Then user should be able to login to home page

Scenario Outline: Free CRM Login for valid user

Given User is on Login page 
When user enter "<username>" and "<password>"
And Click the login button
Then user should be able to login to home page

Examples:
 | username | password |
 |batchautomation|Test@12345|
 |tom|meeeeee|