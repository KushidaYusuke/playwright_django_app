import { test, expect } from '@playwright/test';

test('update', async ({ page }) => {
  await page.goto('http://localhost:8000/accounts/login/');
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('Password').fill('00001111aa');
  await page.getByLabel('Remember Me:').check();
  await page.getByRole('button', { name: 'ログイン' }).click();
  
  await page.getByRole('link', { name: 'Playwrightテスト Playwrightテスト本文' }).first().click();
  await page.getByRole('link', { name: '編集' }).click();
  await page.getByLabel('本文:').click();
  await page.getByLabel('本文:').fill('Playwrightテスト本文更新');
  await page.getByLabel('写真2:').click();
  await page.getByLabel('写真2:').setInputFiles('/home/yusuke/record/image-3.png');
  await page.screenshot({ path: 'update_diary_1.png' });
  await page.getByRole('button', { name: '更新' }).click();
  await page.screenshot({ path: 'update_diary_2.png' });
});