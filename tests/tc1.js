module.exports = {
    tags: ['tc1'],
    'Test 1' : function (browser) {
         browser 
         .url('http://slotmachinescript.com/') // Go to a url
         .waitForElementVisible('body', 5000) // Wait till page loads
         .waitForElementVisible('div[id=betSpinUp]', 1000) // Wait till button loads
         .click('div[id=spinButton]') // Spin round
         .waitForElementNotPresent('#spinButton.disabled', 50000) // Check that round is finished
         .end()
       }
 };