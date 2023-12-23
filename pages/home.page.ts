import { Page, Locator } from '@playwright/test';

class HomePage {
  page: Page;
  getStartedBtn: Locator;
  headingText: Locator;
  homeLink: Locator;
  searchIcon: Locator;
  navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator('#get-started')
    this.headingText = page.locator('text=Think different. Make different.')
    this.homeLink = page.locator('#menu-item-489:has-text("Home")')
    this.searchIcon = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[1]/div[1]/a') //header#zak-masthead div div div div div:nth-child(2) div[class="zak-header-action zak-header-search"] > a
    this.navLinks = page.locator('#zak-primary-menu li[id*=menu]')
  }

  async navigate() {
    await this.page.goto('/');
  }

  getNavLinksText() {
    return this.navLinks.allTextContents()
  }
}

export default HomePage;