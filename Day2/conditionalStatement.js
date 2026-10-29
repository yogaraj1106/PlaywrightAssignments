function launchBrowser(browserName) {
    if(browserName==="chrome"){
        console.log("Launching chrome browser");
    }else{
        console.log("Launching other browser");
    }
}
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke Testing");
            break;
        case "sanity":
            console.log("Sanity Testing");
            break;
         case "regression":
            console.log("Regression Testing");
            break; 
        default:
              console.log("Nothing to test");
            break;
    }
}
launchBrowser("chrome");
runTests("smoke");