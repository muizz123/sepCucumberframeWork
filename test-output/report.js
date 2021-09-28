$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login for valid user"
    },
    {
      "line": 5,
      "value": "#Given User is on Login page"
    },
    {
      "line": 6,
      "value": "#When user enter \"batchautomation\" and \"Test@12345\""
    },
    {
      "line": 7,
      "value": "#And Click the login button"
    },
    {
      "line": 8,
      "value": "#Then user should be able to login to home page"
    }
  ],
  "line": 10,
  "name": "Free CRM Login for valid user",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-for-valid-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should be able to login to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-for-valid-user;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 18,
      "id": "free-crm-login-feature;free-crm-login-for-valid-user;;1"
    },
    {
      "cells": [
        "batchautomation",
        "Test@12345"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-for-valid-user;;2"
    },
    {
      "cells": [
        "tom",
        "meeeeee"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-for-valid-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Free CRM Login for valid user",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-for-valid-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"batchautomation\" and \"Test@12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should be able to login to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_page()"
});
formatter.result({
  "duration": 4552796700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "batchautomation",
      "offset": 12
    },
    {
      "val": "Test@12345",
      "offset": 34
    }
  ],
  "location": "LoginStepDefination.user_enter_and(String,String)"
});
formatter.result({
  "duration": 185976900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_the_login_button()"
});
formatter.result({
  "duration": 3005101800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_login_to_home_page()"
});
formatter.result({
  "duration": 12031900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Login for valid user",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-for-valid-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enter \"tom\" and \"meeeeee\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user should be able to login to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Login_page()"
});
formatter.result({
  "duration": 3393201900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 12
    },
    {
      "val": "meeeeee",
      "offset": 22
    }
  ],
  "location": "LoginStepDefination.user_enter_and(String,String)"
});
formatter.result({
  "duration": 155755700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.click_the_login_button()"
});
formatter.result({
  "duration": 2004226200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_login_to_home_page()"
});
formatter.result({
  "duration": 40733500,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Free CRM - CRM software for customer relationship management, sales, and support.]\u003e but was:\u003c[CRMPRO]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefination.LoginStepDefination.user_should_be_able_to_login_to_home_page(LoginStepDefination.java:46)\r\n\tat ✽.Then user should be able to login to home page(login.feature:15)\r\n",
  "status": "failed"
});
});