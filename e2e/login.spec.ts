import { test, expect } from '@playwright/test';

test('login_logout', async ({ page }) => {
  await page.goto('http://localhost:8000/'); //トップページを開く
  await page.getByRole('link', { name: 'LOG IN', exact: true }).click(); //ログインページへ
  //メールアドレスとパスワードを入力してログイン
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('Password').fill('00001111aa'); 
  await page.getByLabel('Remember Me:').check();
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.screenshot({ path: 'login_diary.png' });
  //ログアウト
  await page.getByText('LOG OUT').click();
  await page.screenshot({ path: 'logout_diary.png' });
});


test('signup', async ({ page }) => {
  await page.goto('http://localhost:8000/'); //トップページを開く
  //await page.getByRole('link', { name: 'SIGN UP', exact: true }).click(); //新規登録ページへ
  await page.getByText('SIGN UP').click();
  //メールアドレスとパスワードを入力して新規登録
  await page.getByPlaceholder('Email address').fill('new@gmail.com');
  await page.getByPlaceholder('Email address').press('Tab');
  await page.getByText('Password:').fill('00001111aa');
  //await page.getByPlaceholder('Password').fill('00001111aa');
  await page.getByText('Password:').press('Tab');
  await page.getByText('Password (again):').fill('00001111aa');
  //await page.getByPlaceholder('Password (again)').fill('00001111aa');
  await page.screenshot({ path: 'signup_diary_1.png' });
  await page.getByRole('button', { name: '登録' }).click();
  await page.screenshot({ path: 'signup_diary_2.png' });
});
