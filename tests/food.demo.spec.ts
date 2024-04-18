import { test, expect } from "@playwright/test";

test('Checking whether the server is up and running @smoke', async ({ page }) => {
  await page.goto('');
  await expect(page).toHaveTitle('Food Lookup Demo'), 'Warning: the server is not running!';
  console.log("The server is up and running")
});


test('Checking the functionality @smoke', async ({ page }) => {
  await test.step('Writing "90%," brings the expected result', async () => {
    await page.goto('');
    await page.getByPlaceholder('Search foods...').fill('90%,');
    await expect(page.getByRole('cell', { name: 'Beef, ground, 90% ln meat / 10% fat, raw' })).toBeVisible()
  })

  await test.step('Writing "hamburger bun" brings the expected result', async () => {
    await page.goto('');
    await page.getByPlaceholder('Search foods...').fill('hamburger bun');
    await expect(page.getByRole('cell', { name: 'Pepperidge farm, 100% whl wheat hamburger buns' })).toBeVisible()

  })

  await test.step('"x" button works, writing "catsup" brings the expected result', async () => {
    await page.goto('');
    await page.getByPlaceholder('Search foods...').fill('test');
    await page.locator('i').nth(1).click();
    await expect(page.getByPlaceholder('Search foods...')).toBeVisible()
    await page.getByPlaceholder('Search foods...').fill('catsup');
    await expect(page.getByRole('cell', { name: 'Catsup', exact: true })).toBeVisible()

  })

  await test.step('"Writing "ab" gives 25 results ', async () => {
    await page.goto('');
    await page.getByPlaceholder('Search foods...').fill('ab');
    await page.waitForSelector('tr:nth-of-type(25) > td:nth-of-type(1)');
    console.log("Yes, row 25 was found");

  })

})

