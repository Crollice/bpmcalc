
var ogBpm = document.getElementById('og-bpm');
var newBpm = document.getElementById('new-bpm');
var projectBar = document.getElementById('slider');
var projectPercent = document.getElementById('percent');
var oldSpeedField = document.getElementById('og-speed');
var newSpeedField = document.getElementById('new-speed')

var newSpeedValue = newSpeedField.value;


function updateTextInput(val) {
    projectPercent.value = val; 
  }


function calculateBpm() {
    var sliderValue = projectPercent.value * .01;
    var enteredBpm = ogBpm.value;
    // var pointOhOne = .01;
    // var sliderSmall = sliderValue * pointOhOne;
    var firstCalc = enteredBpm * sliderValue.toFixed(3);
    var mainCalc = parseFloat(firstCalc) + parseFloat(enteredBpm);

    var recordSpeed = parseFloat(mainCalc) / 45;
    var slowBpm = parseFloat(recordSpeed) * 33.3;



    console.log(slowBpm);
    newBpm.value = mainCalc;
    newSpeedField.value = slowBpm.toFixed(2);
    
}

projectPercent.addEventListener('click', currentBpm);

function currentBpm() {
    newBpm.value = ogBpm.value;
    projectPercent.value = 0;
    console.log('test');
}




