import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await page.getByRole('heading', { name: 'Private Diary' }).click();
  await page.getByRole('link', { name: 'LOG IN', exact: true }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('00001111aa');
  await page.getByLabel('Remember Me:').check();
  await page.getByRole('button', { name: 'ログイン' }).click();
});