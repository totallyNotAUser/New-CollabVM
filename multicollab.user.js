// ==UserScript==
// @name 			Easy Multicollab
// @description 	Add user vms to the main page with a click of a button!
// @author          CollabVM Unofficial
// @license 		ISC; https://github.com/CollabVM-Unofficial/New-CollabVM/blob/master/LICENSE
// @namespace 		https://github.com/CollabVM-Unofficial/New-CollabVM
// @version 		1.0.0
// @include 		http://computernewb.com/collab-vm/*
// @run-at 			document-end
// @grant           none
// ==/UserScript==

// Creates a button.
var multColl       = document.createElement ('div');
multColl.innerHTML = '<button id="CollabButton" type="button">'
             	   + 'Multicollab</button>';
multColl.setAttribute ('id', 'ButtonContainer');
document.body.appendChild (multColl);

// Executes the function if the button is clicked.
document.getElementById ("CollabButton").addEventListener (
    "click", multicoll, false
);

// The function that adds the user vms, more will be added to the function in the future.
function multicoll() {
	multicollab('malakas.ml:6004');
}