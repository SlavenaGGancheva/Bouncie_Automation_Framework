import { test, expect } from '@playwright/test';

const publicPages = [
  { name: 'home', path: '/' },
  { name: 'pricing', path: '/pricing' },
  { name: 'family', path: '/family' },
  { name: 'fleet', path: '/fleet' },
];

test.describe('Bouncie public page API checks', () => {
  for (const publicPage of publicPages) {
    test(`should return valid HTML for ${publicPage.name} @api`, async ({
      request,
    }) => {
      const response = await request.get(publicPage.path);
      const headers = response.headers();
      const body = await response.text();

      expect(response.status()).toBeLessThan(400);
      expect(response.ok()).toBeTruthy();
      expect(headers['content-type']).toContain('text/html');
      expect(body.length).toBeGreaterThan(0);
      expect(body.toLowerCase()).toContain('bouncie');
    });
  }
});

test.describe('Invalid public routes', () => {
  test('should return a non-success response for an invalid route @api', async ({
    request,
  }) => {
    const response = await request.get(
      `/portfolio-invalid-route-${Date.now()}`,
    );

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });
});