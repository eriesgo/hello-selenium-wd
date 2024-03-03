Feature: Are we using Selenium
  Everybody wants to know if Selenium works with Cucumber

  Scenario: Posting text input
    Given I am on the Selenium web page
    When I enter "Cheese!" in the Text input
    Then the page should return with "Received!"
