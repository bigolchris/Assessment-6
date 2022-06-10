
import { Builder, Capabilities, By } from "selenium-webdriver"

const { duel, draw } = require("/apis/duel")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})


describe('Clicking draw button displays "choices"', () => {
    expect(draw.click()).toBe('#choices')
})