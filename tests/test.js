import { expect, test } from '@playwright/test';

test.describe('Demo Page', () => {
	test('It has the title', async ({ page }) => {
		await page.goto('/');
		expect(await page.textContent('h1')).toBe('svelte-vertical-timeline');
	});

	test('It has the correct number of Items', async ({ page }) => {
		await page.goto('/');
		const list = page.locator('li');
		await expect(list).toHaveCount(8);
	});
});
