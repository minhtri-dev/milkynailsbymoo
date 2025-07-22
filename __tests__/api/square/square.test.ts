import { expect, test } from 'vitest';
import client from '../../../src/app/utils/squareClient';

test('Check square bookings api', async () => {
  const startAtMax = "2025-07-21T16:07:28.396Z";
  const startAtMin = "2025-06-21T16:07:48.997Z";
  try {
    const response = await client.bookings.list({
      startAtMax,
      startAtMin,
    });

    expect(response).toBeDefined();
    expect(response.data).toBeDefined();
    expect(Array.isArray(response.data)).toBe(true);
  } catch (error) {
    expect(error).toBeNull();
  }
});