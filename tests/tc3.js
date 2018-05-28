/************************************************************************************************
This code isn't working, and the 3rd test case was failed.
Since I ran into the problems how to use some features in Nightwatch.js I describe my vision here.
So, the main idea how to run this TC is:
Use loop (for eg while):

var spin = browser.getCssProperty("#credits") // Take value with our credits
var check = false // Flag for loop
while (!check) { // While our flag false - do spins and check for win
  .click('div[id=spinButton]') // Spin round
  if (.waitForElementVisible('won', 1000)) { // Check if we win
    check = true // If we win round change our flag, for exit from loop  
  }
}
var lastWin = browser.getCssProperty("#lastWin") // Take value with our last win
var total = credits + lastWin // Sum our previous credit with current win
browser.expect.element('#credits').text.to.equal(total) // Check, if the win was added correctly
************************************************************************************************/

/*
module.exports = {
  tags: ['tc3'],
  'Test 3' : function (browser) {
       browser 
       //.getValue('#credits', function(result){
       // credits = result.value;
       // })
       //var spin = browser.getCssProperty("#credits")
       .url('http://slotmachinescript.com/') // Go to a url
       .waitForElementVisible('body', 5000) // Wait till page loads
       .waitForElementVisible('div[id=betSpinUp]', 1000) // Wait till button loads
       .click('div[id=spinButton]')
       .waitForElementNotPresent('#spinButton.disabled', 50000)
       //var lastWin = browser.getCssProperty("#lastWin")
       //var total = lastWin + spin
       //browser.expect.element('#credits').text.to.equal(total)
       //.getValue('#lastWin', function(result){
       // lastWin = result.value;
       // })
       // var total = credits + lastWin
        //browser.expect.element('#credits').text.to.equal()
        browser.end()
        
      
        
     }
};
*/