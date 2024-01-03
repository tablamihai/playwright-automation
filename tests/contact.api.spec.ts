import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';
import apiController from '../controller/api.controller';

test.describe('Contact', () => {
  let contactPage: ContactPage;
  let randomPerson: APIResponse;

  test.beforeAll(async () => {
    
    await apiController.init();
    randomPerson = await apiController.getUsers();
    const newUserToDo = await apiController.createUserToDo();

    console.log(newUserToDo);
  });
  

  test('Fill contact form and verify success message', async ({ page }) => {
    contactPage = new ContactPage(page);

    // open contact page
    await contactPage.navigate()

    //  fill out the input fields and submit
    await contactPage.submitForm(randomPerson['name'],
    randomPerson['email'],
    randomPerson['phone'], 
    randomPerson['website']);

    // verify success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
  })
})
