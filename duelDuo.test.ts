
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

describe('duel-duo tests', () => {
    

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking draw button displays div', async () => {


    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    const choicesDiv = await driver.findElement(By.id('choices'))
    const displayed = choicesDiv.isDisplayed()
    expect(displayed).toBe(true)
 })


    test('clicking "add to duo" button displays another div',async () => {
        await driver.findElement(By.id('draw')).click()
        await driver.sleep(4000)
        await driver.findElement(By.xpath('(//button[text{} = "Add to Duo"])[1]')).click()

        const playerDivDuo = await driver.findElement(By.id('player-duo'))
        const displayed = await playerDivDuo.isDisplayed()
        expect(displayed).toBe(true)
    })

})
