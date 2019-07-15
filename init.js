"use strict";

const searchButton = document.querySelector('button');
let searchCity = document.querySelector('#city');

const loadingText = document.querySelector('#load');

let weatherContainer = document.querySelector('#weather');
let weatherCity = weatherContainer.querySelector('#weatherCity');
let weatherDesc = weatherContainer.querySelector('.weatherDesc');
let weatherTemp = weatherContainer.querySelector('.weatherTemp');

//temp toggle
const tempSwitch = weatherContainer.querySelector('.switch');
const tempUnitToggle = weatherContainer.querySelector('#temp-unit-toggle input');