module.exports = {
    tags: ['tc2'],
    'Test 2' : function (browser) {
        browser 
        .url('http://slotmachinescript.com/') // Go to a url
        .waitForElementVisible('body', 5000) // Wait till page loads
        .waitForElementVisible('div[id=betSpinUp]', 1000) // Wait till button loads
        .click('div[id=betSpinUp]') // Change the bet by 2 points
        .click('div[id=spinButton]') // Spin round
        .waitForElementNotPresent('#spinButton.disabled', 50000) // Check that round is finished
        browser.expect.element('#credits').text.to.match(/[0-9]/) // Check that total spins contains only numbers
        browser.end()
    }
};
