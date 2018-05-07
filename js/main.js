
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
    var firstCalc = enteredBpm * sliderValue.toFixed(3);
    var mainCalc = parseFloat(firstCalc) + parseFloat(enteredBpm);
    

    var recordSpeed = parseFloat(mainCalc) / 45;
    var slowBpm = parseFloat(recordSpeed) * 33.3;

    var removeNanMainCalc = () => {
        if ( isNaN(mainCalc) ) {
            return null;
        }
        else {
            return mainCalc.toFixed(2);
        }
    }

    var removeNanSlowBpm = () => {
        if ( isNaN(slowBpm) ) {
            return null;
        }
        else {
            return slowBpm.toFixed(2);
        }
    }

    newBpm.value = removeNanMainCalc();
    newSpeedField.value = removeNanSlowBpm();
    
}

projectPercent.addEventListener('click', currentBpm);

function currentBpm() {
    newBpm.value = ogBpm.value;
    projectPercent.value = 0;
    console.log('test');
}




