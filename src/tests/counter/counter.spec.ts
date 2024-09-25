import { test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("counter shows up", async ({ page }) => {
  const counter = page.getByText("0")
  await expect(counter).toBeVisible()
})

test("counter increases", async ({ page }) => {
  const button = page.getByRole("button")
  await button.click()
  const counter = page.getByText("1")
  await expect(counter).toBeVisible()
})
