import { test, expect } from '@playwright/test';

test('delete', async ({ page }) => {
  await page.goto('http://localhost:8000/accounts/login/');
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('00001111aa');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('link', { name: 'Playwrightテスト Playwrightテスト本文更新' }).click();
  await page.getByRole('link', { name: '削除' }).click();
  await page.screenshot({ path: 'delete_diary_1.png' });
  await page.getByRole('button', { name: '削除' }).click();
  await page.screenshot({ path: 'delete_diary_2.png' });
});