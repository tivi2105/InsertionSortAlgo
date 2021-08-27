var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ar = [5, 2, 4, 6, 1, 3];
var arCombo = [], keys = [];
var frame = 0, k = 0;

drawBars(ar);
insertionSort();

function insertionSort() {
pushArrayToList(ar);
for(var i = 1;i < ar.length; i++) {
var key = ar[i];
var j = i-1;
while(j >= 0 && ar[j] > key) {
ar[j+1] = ar[j];
j--;
//console.log(ar);
keys.push(key);
pushArrayToList(ar);
//drawBars(ar);
//await sleep(1000);
}
ar[j+1] = key;
}
keys.push(0);
pushArrayToList(ar);
//console.log(arCombo);
}

function drawBars(ar, key) {
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 1280, 600);
ctx.fillStyle = 'white';
for(var i = 0;i < ar.length; i++)  {
ctx.fillRect((i+1)*160, 500-(10*ar[i]), 80, 500-(10*ar[i]));
ctx.fillText(""+ar[i], (i+1)*160, 500-(10*ar[i])-50);
}
ctx.fillText("Key:"+key, 500, 200);
ctx.stroke();
}

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

function pushArrayToList(ar) {
arCombo[k] = [];
for(var i = 0;i < ar.length; i++) {
arCombo[k][i] = ar[i];
}
k++;
}

function playNext() {
frame++;
checkButtons(frame);
drawBars(arCombo[frame], keys[frame]);
}
function playPrevious() {
frame--;
checkButtons(frame);
drawBars(arCombo[frame], keys[frame]);
}

function checkButtons(frame) {
if(frame > arCombo.length-2) {
document.getElementById('nextButton').disabled = true;
} else if(frame == 0) {
document.getElementById('prevButton').disabled = true;
} else {
document.getElementById('nextButton').disabled = false;
document.getElementById('prevButton').disabled = false;
}
}
