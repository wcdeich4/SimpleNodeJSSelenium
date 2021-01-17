const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const chrome = require("selenium-webdriver/chrome");
let chromeDriverPath = './chromedriver';
var service = new chrome.ServiceBuilder(chromeDriverPath).build();
chrome.setDefaultService(service);

let chromeBinaryPath = "/opt/google/chrome/chrome"; 
let options = new chrome.Options().setChromeBinaryPath(chromeBinaryPath);
options = options.addArguments("--no-sandbox");
options = options.addArguments("--headless");
options = options.addArguments("--disable-dev-shm-usage");
options = options.addArguments('--remote-debugging-port=9222');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

driver.get('https://www.tbn.org/').then(
    driver.takeScreenshot().then(
        function(image, err) {
            require('fs').writeFile('out.png', image, 'base64', function(err) {
                console.log(err);
            });
        }
    )
);
    /*
driver.get('http://www.google.com').then(function(){
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver\n').then(function(){
    driver.getTitle().then(function(title) {
      console.log(title)
      if(title === 'webdriver - Google Search') {
         console.log('Test passed');
      } else {
         console.log('Test failed');
      }
     driver.quit();
    });
  });
});
*/