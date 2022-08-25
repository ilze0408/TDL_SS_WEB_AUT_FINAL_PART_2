// import { should } from "chai";
import Formspage from "../../cypress/fixtures/pageObjects/Formspage";


describe('DemoQA', () => {
  beforeEach(() => {
    Formspage.visit();
  })
  
  it.only('Scenario1', () => {
    // cy.visit('https://demoqa.com/automation-practice-form')
    Formspage.Name.type("Ilze");
    Formspage.lastName.type("Gailite");
    Formspage.eMail.type("ilze@test.lv");
    Formspage.female.click({force: true});
    Formspage.phone.type("98765432");
    Formspage.calendar.click();
    Formspage.year.select("1984");
    Formspage.month.select("February");
    Formspage.date.click();
    Formspage.subjects.type("Maths");
    Formspage.hobbies.click({force: true});
    Formspage.address.type("Hanzas4");
    Formspage.state.click().select("NCR");
    Formspage.city.click().should("have.name", "Delhi").click();
    Formspage.submit.click();

  })

  
})



