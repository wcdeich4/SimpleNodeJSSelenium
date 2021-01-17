const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
const edge = require('selenium-webdriver/edge');

let options = new edge.Options();
options.setEdgeChromium(true);
//options.addArguments("headless");
//options.addArguments("disable-gpu");
options.addArguments('--profile-directory=Profile 1');
options.setBinaryPath('C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'); 

let browserDriverPath = 'msedgedriver.exe';
let service = new edge.ServiceBuilder(browserDriverPath).enableVerboseLogging().build();
let driver = edge.Driver.createSession(options, service);

let testURL = 'https://www.google.com/';
driver.get(testURL);