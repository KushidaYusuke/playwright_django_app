import { test, expect } from '@playwright/test';

//日記の新規作成のテスト
test('create', async ({ page }) => {
  await page.goto('http://localhost:8000/accounts/login/');
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('Password').fill('00001111aa');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('link', { name: '新規作成' }).click();
  await page.getByLabel('タイトル:').click();
  await page.getByLabel('タイトル:').fill('Playwrightテスト');
  await page.getByLabel('タイトル:').press('Tab');
  await page.getByLabel('本文:').fill('Playwrightテスト本文');
  await page.getByLabel('写真1:').click();
  await page.getByLabel('写真1:').setInputFiles('/home/yusuke/record/image-102.png'); //てきとうな写真をアップロード
  await page.screenshot({ path: 'create_diary_1.png' });
  await page.getByRole('button', { name: '作成' }).click();
  await page.screenshot({ path: 'create_diary_2.png' });
});
