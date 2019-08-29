// ==UserScript==
// @name 			Easy Multicollab
// @description 	Add user vms to the main page with a click of a button!
// @author          CollabVM Unofficial
// @license 		ISC; https://github.com/CollabVM-Unofficial/New-CollabVM/blob/master/LICENSE
// @namespace 		https://github.com/CollabVM-Unofficial/New-CollabVM
// @version 		1.0.1
// @include 		http://computernewb.com/collab-vm/*
// @run-at 			document-end
// @grant           none
// @downloadURL     https://raw.githubusercontent.com/CollabVM-Unofficial/New-CollabVM/master/multicollab.user.js
// ==/UserScript==

// Creates a button.
var multColl       = document.createElement ('div');
multColl.innerHTML = '<button id="CollabButton" type="button">'
             	   + 'Add Presets</button>';
multColl.setAttribute ('id', 'ButtonContainer');
document.body.appendChild (multColl);
// Creates input field for adding new VM IPs
var addVM         = document.createElement ('div');
addVM.innerHTML   = '<input type="text" name="VMIP" id="VMIP" placeholder="example.com:6004" />'
		  + '<button id="AddTheVM" type="button">'
		  + 'Add VM</button>';
addVM.setAttribute ('id', 'ButtonTextboxContainer');
document.body.appendChild (addVM);


// Executes the function if the button is clicked.
document.getElementById ("CollabButton").addEventListener (
    "click", multicoll, false
);

document.getElementById ("AddTheVM").addEventListener (
	"click", multiadd, false
);

// The function that adds the user vms, more will be added to the function in the future.
function multicoll() {
	multicollab('malakas.ml:6004');
}

function multiadd() {
	multicollab(document.getElementById("VMIP").value);
}
