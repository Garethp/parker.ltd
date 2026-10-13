import { expectAccessible } from "./accessibility";
import { expect, test } from "./fixtures";

test("unknown address shows an accessible not found page", async ({ page }) => {
  const response = await page.goto("/no-such-page/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
  await expectAccessible(page);
});
