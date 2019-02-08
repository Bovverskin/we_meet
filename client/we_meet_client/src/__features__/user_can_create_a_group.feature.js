require('../__mocks__/mocks')

describe('Group creation form', () => {

  beforeAll(async () => {
    jest.setTimeout(10000);
    await page.goto(appURL);
  });

  beforeEach(async () => {
    await page.reload();
  });

  describe('Logged in user can access and use the group form', () => {

    beforeEach(async () => {
      await page.click('button[id="login-btn"]')
      await page.type('input[name="email"]', 'rand@random.com');
      await page.type('input[name="password"]', 'password');
      await page.click('input[value="Login"]')
      await page.waitFor(1000)
    })

    it("and successfully create the group", async () => {
      await page.click("button[id='create-group-form']")
      await page.type('input[name="name"]', 'Group name');
      await page.type('textarea[name="description"]', 'About group text');
      await page.select('select[name="category_id"]', '1');
      await page.type('input[name="location"]', 'Stockholm');
      await page.click('input[value="Submit"]')
      await page.waitFor(2000)
      await expect(page).toMatch('Congratulations, your group has been created!')

    })
  });
})