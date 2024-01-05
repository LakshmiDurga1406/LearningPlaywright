import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

// going to amazon page 
  await page.goto('https://www.amazon.in/');

// clicking on Mobiles 
  await page.getByText('Mobiles').click();

//selecting Smartwatches  
  await page.getByRole('link', { name: 'Smartwatches', exact: true }).click();

// Clickinh on first Smartwatch 
  await page.goto('https://www.amazon.in/Fire-Boltt-Bluetooth-Calling-Assistance-Resolution/dp/B0BF57RN3K?ref_=Oct_d_obs_d_5605728031_0&pd_rd_w=Ci2HO&content-id=amzn1.sym.fa49cb25-7bde-45d1-acfa-e502d99f953f&pf_rd_p=fa49cb25-7bde-45d1-acfa-e502d99f953f&pf_rd_r=WW99HWANHE00ZW2N19D8&pd_rd_wg=EDfUo&pd_rd_r=8afc4385-2b76-4db9-8c8f-ad14dcac96d2&pd_rd_i=B0BF57RN3K');
  
});