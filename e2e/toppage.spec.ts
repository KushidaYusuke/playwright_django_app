import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  // Recording...await page.goto('http://localhost:8000/');
  await page.getByRole('link', { name: 'LOG IN', exact: true }).click();
  await page.getByRole('link', { name: 'INQUIRY' }).click();
  await page.getByRole('link', { name: 'PRIVATE DIARY' }).click();
  await page.getByRole('link', { name: 'PRIVATE DIARY' }).click();
  await page.getByRole('link', { name: 'PRIVATE DIARY' }).click();
  await page.getByRole('link', { name: 'Sign Up' }).click();
  await page.getByRole('link', { name: 'Log In', exact: true }).click();
});