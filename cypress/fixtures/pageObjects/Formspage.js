import BasePage from "./Base.page";

class Formspage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get Name() {
    return cy.get(`[id="firstName"]`)
  }

  static get lastName() {
    return cy.get(`[id="lastName"]`)
  }

  static get eMail() {
    return cy.get(`[id="userEmail"]`)
  }
  
  static get female() {
    return cy.get(`[id="gender-radio-2"]`)
  }

  static get phone() {
    return cy.get(`[id="userNumber"]`)
  }
  
  static get calendar() {
    return cy.get(`[id="dateOfBirthInput"]`)
  }

  static get year() {
    return cy.get(`[class="react-datepicker__year-select"]`)
  }

  static get month() {
    return cy.get(`[class="react-datepicker__month-select"]`)
  }

  static get date() {
    return cy.get(`[aria-label="Choose Wednesday, February 29th, 1984"]`)
  }

  static get subjects() {
    return cy.get(`[id="subjectsContainer"]`)
  }

  static get hobbies() {
    return cy.get(`[id="hobbies-checkbox-3"]`)
  }

  static get address() {
    return cy.get(`[id="currentAddress"]`)
  }

  static get state() {
    return cy.get(`[class=" css-yk16xz-control"]`)
  }

  static get city() {
    return cy.get(`[class=" css-1wy0on6"]`)
  }

  static get submit() {
    return cy.get(`[id="submit"]`)
  }
}

export default Formspage;
