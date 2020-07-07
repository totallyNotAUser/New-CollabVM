// ==UserScript==
// @name 			New Collab VM
// @description 	(d1g1talcat's fork, now the CollabVM Communites fork.) Adds new features to Collab VM chat
// @license 		ISC; https://github.com/CollabVM-Unofficial/New-CollabVM/blob/master/LICENSE
// @namespace 		https://github.com/CollabVM-Unofficial/New-CollabVM
// @version 		1.1.2
// @include 		http://computernewb.com/collab-vm/*
// @include         http://vm.getgle.org/*
// @run-at 			document-end
// @grant 			none
// @downloadURL 	https://raw.githubusercontent.com/CollabVM-Unofficial/New-CollabVM/master/cvmutils-communityfork.user.js
// @icon 			data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAFYElEQVR4nOycvW7kNhCAh0FeIW+RFGlsIA6STdLkp0iRbZ2HiBtvqk0Tp3EeIm5zxTZXnvcM+3B2fYBb9/cAV+pAemfNpUmKP0NxqNUHGNpbwxLvG2o4oih9AhNVmMRXYhJfiUl8JT6t3YACdNpnUbEdXtg2LAEl/Pbm/+0Xh0dz/Mju/8muQQk8E27CMQBsGpJAr3ATTgGo3oAEooWbcAhAa4Nrd352nL0TDNrh0RwH4sED0FKPV9JPFhfqHxiAr7/5NXvHNc6A5sQjrQegWfFIqwFoXjzSWgBGIx5pJQCjE49QBuD6aqXvk8RZa+XkM1AwaJL1z08BePw+JgCGcFWGbkrQbPnNitdlIJgScgNgE05Nc+J9MrQLI7WNDYBLOH5PMV4gTeV4COx9ukDXuGCOAeARbqQa2JdUEy38j9P/1Fb2UCnKJt88AyBMOBmcxScLv3vzIvggOA0ht65Us/hzmdJ+LxzFDyLchkv42d/LUff4asJ15PF14bB7AUUGB/FkwuXvcysPKd0U3nWd9Xg51BRPKhy2VUxe2aenlRLCkRriiwiX/HTawclCwO1NungpHYX/+8/vaktZvyNDii8qnKSBhvCnwbZN8eyFI6bw77/9HF69fqc+67mfgpLimxGO6MLByPeU0qGg+KApXC7CdaT0kmUkQi1emZHSUaZtgOIoHGmtqtmmFWw0CjcDAEyFI3pVo7fv8P0cbj+jmx7OFd+bx80AAFPh4OjhOKhSSodM8ds8fvDVb2rrOyVlAKR8uTXTTm3hiNl+fXLs4GgOd4Q3REhSja1Xh4DSawsPgVI6UD+YoOfxEFqQTl1GIuyeCHl5VrsFT5SSDpzEo/CfF7VbMgxsxO+LcISN+H2DnXhOOR6RZSX1fVcOd6AUUrhMN5xSjnkLkBI24jkLLxEANuIp+PD2u6y/7xOOUxsUsBOPKScGFD6bzWC9Xicfu0/4KFcLp+R4XbgP31I+nR7hQLnkkY14CuHL5VLNMFom68TJ4mJ7r8DFEMIRNuJD8AmHzbSuLt3IyUqeLwBDCEeaEB8iXCJWQs2b9+RkZwCGEI6wFh8qHIRQ07bn98dwfb/aWQHsYScAlANnCDniVd6keNLaJFQ4ppVr2Yarla3Hhsw5V3lGILfHk8qPFu7PySTPKpWCJNWElmsudOEPDw/b7xOEs5atk32zW3+yIkW+lH65XoPoAGZ/Pfb0UOHGyyBsgyjbQJANrvoLHmKQvVysL6EDASJSuAVTttDyPKsAkOb4VPnSiRBpwgMeBrMNtNWDQNHjg64KbUjRQogc4RAh0Rx4Xb8bBKpUs1MThyJFS+k/zL5Ql+uFhDvbqzH42UB9ASUCa+ctUv4vP365s7AJzxxL9QKFxNjOhqIBKHHlGlzbm2Jtz57iPgOPTVHFmGNCkQCUjOqzvI9L+BDPQJzarhLlI8uqKIRuU+93ErnF7wocpySd8ZPFkFEsOYCl9PSY9pC/xXXI2ckSQU5JAzaJvv1Yxyv595uCICm9tZS3bKd3lnATTy/2XqekTCm3Ij5n0KR8Fa7r5sloe3xyDi/0Ktzs8aoV8RCRz3uFxz6zuu9v4UO8pVyM8JoBYLdoNQBh/CikcJf0vhVioQtSZW7f5Pem6nhqolNKao8vseyjRfFNCyff0QCMQnixHRZgVMKL75iAUQof7AAJjFr44AcKYC+EVzuggy7mdeMtC69+YAs7E1ApAXDBSTibBliIDoALjsIRNg2xkBwAzsIRdg2yEByAFoQjbBtmwRmAloQj7BtooeojNFQ001ALrBahTjRCizdCRsEkvhKT+EpM4isxia/EJL4Sk/hKfAwAAP//B6BFHurIs+cAAAAASUVORK5CYII=
// ==/UserScript==
"use strict";

// fix for Chrome users who don't have Array.concat
if(Array.concat === undefined) {
    Array.concat = function() {
	let arrs = Array.from(arguments);
	let arr0 = arrs.shift();
	return Array.prototype.concat.apply(arr0, arrs);
    };
}

// hopefully these advice functions should be helpful for hooking internal events in a cleaner way in future revisions
function withAdviceAround(advised, advice) {
    return function() {
	return advice.apply(this, Array.concat([advised], arguments));
    };
}
function withAdviceBefore(advised, advice) {
    return function() {
	advice.apply(this, arguments);
	return advised.apply(this, arguments);
    };
}

let typerDelay = 125;

var ignoredusers = {
    ["chocolatebot"]: 1,
    ["ha3orx"]: 1,
    ["eeveevulpix"]: 1,
    ["inspector gadget bot"]: 1,
    ["grok gimme cock"]: 1,
    ["fuck you 1337"]: 1
};
var hideusers = /^(666|afk|c3po)$/i;
var guests = /^guest\d+$/i;

var chatbox = document.getElementById("chat-box");
var onlineusers = document.getElementById("online-users");
var chatpanel = document.getElementById("chat-panel");
var chatinput = document.getElementById("chat-input");

if(chatbox && onlineusers && chatpanel) {
    var rootButtonHolder = document.querySelector("#osk-btn").parentElement; // added by cat
    var initial = 1;
    var changedusers = [];
    var sentmessages = [];
    var sentindex = -1;
    var lastli;
    var lastdiv;
    var ignoredialog = element(
	document.body,
	["div#ignoredialog", {
	    class: "ignoredialog",
	    tabIndex: -1
	},
	 ["div", {
	     onclick: function(event) {
		 ignoredialog.blur();
		 var name = event.currentTarget.parentNode.dataset.name.toLowerCase();
		 var add;
		 if(ignoredusers[name]) {
		     ignoredusers[name] = 0;
		 } else {
		     ignoredusers[name] = 1;
		     add = 1;
		 }
		 var usernames = document.querySelectorAll("#chat-box .username");
		 for(var i = 0; i < usernames.length; i++) {
		     if(usernames[i].firstChild.nodeValue.toLowerCase() == name) {
			 usernames[i].parentNode.parentNode.style.display = add ? "none" : "";
		     }
		 }
	     }
	 }, "Ignore user"]
	]
    ).ignoredialog;

    // Detect changes in user list
    new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
	    for(var thisnode of mutation.addedNodes) {
		let name = thisnode.firstChild.nodeValue;
		if(hideusers.test(name)) {
		    thisnode.style.display = "none";
		} else if(!guests.test(name)) {
		    changedusers.push([1, name]);
		    asyncStrToColor(name).then(color => thisnode.style.color = color);
		}
		thisnode.addEventListener("contextmenu", function(event) {
		    event.preventDefault();
		    ignoredialog.style.left = (document.body.scrollLeft+event.clientX + 5) +"px";
		    ignoredialog.style.top = (document.body.scrollTop + event.clientY + 5) + "px";
		    ignoredialog.dataset.name = name;
		    if(ignoredusers[name.toLowerCase()]) {
			ignoredialog.classList.add("ignored");
		    } else {
			ignoredialog.classList.remove("ignored");
		    }
		    ignoredialog.focus();
		});
	    }
	    for(var removedNode of mutation.removedNodes) {
		let name = removedNode.firstChild.nodeValue;
		if(!hideusers.test(name)&&!guests.test(name)) {
		    changedusers.push([-1, name]);
		}
	    }
	});
    }).observe(onlineusers, {childList: 1});

    // Detect changes in chat
    new MutationObserver(function(mutations) {
	var date = new Date();
	mutations.forEach(function(mutation) {
	    for(var thisnode of mutation.addedNodes) {
		var username = thisnode.getElementsByClassName("username")[0];
		if(!initial)
		    thisnode.firstChild.dataset.time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		if(username) {
		    var user = username.firstChild.nodeValue;
		    if(ignoredusers[user.toLowerCase()]) {
			thisnode.style.display = "none";
		    } else {
			changedusers = [];
			lastli = lastdiv = null;
		    }
		    if(!guests.test(user)) {
			asyncStrToColor(user).then(color => username.style.color = color);
		    }
		    var textnode = thisnode.firstChild.lastChild;
		    var text = textnode.nodeValue;
		    textnode.nodeValue = text = text.replace(/(\\x[\da-f]{2}|\\u[\da-f]{4}|\\u{1[\da-f]{4}})+/g, function(ucode) {
			return String.fromCharCode(parseInt(ucode.substring(3, -1)));
		    });
		    const textClasses = [[">", "greentext"],
					 ["<", "redtext"],
					 ["^", "bluetext"],
					 ["{", "blindyourasstext"]];
		    for(let textClass of textClasses) {
			if(text[0] == textClass[0]) {
			    textnode = element(
				["span#textnode", {
				    class: textClass[1]
				}, text]
			    ).textnode;
			    thisnode.firstChild.replaceChild(textnode, thisnode.firstChild.lastChild);
			    textnode = textnode.firstChild;
			}
		    }
		    // added by cat
		    if(text.startsWith("upd8-v0:")) {
			var chatnode = document.createElement("span");
			chatnode.classList.add("cvmutils-upd8-notif");
			var updMsg = document.createTextNode("This person is offering an encrypted update to CVMUtils. Do you want to install it? (This update will do nothing unless its creator has the release key, obtainable only from CVMUtils's code itself; in addition, your userscript manager may allow you to preview it before installing it.) ");
			var updURL = text.slice(5);
			var updBtn = document.createElement("button");
			updBtn.addEventListener("click", function() {
			    asyncTryInstallUpdate(updURL);
			});
			updBtn.textContent = "Yes";
			chatnode.appendChild(updMsg);
			chatnode.appendChild(updBtn);
			thisnode.firstChild.replaceChild(chatnode, thisnode.firstChild.lastChild);
			textnode = null;
		    }
		    if(textnode != null) {
			// end of cat stuff
			var pos = [];
			var found;
			var nameregex = new RegExp(window.username, "ig");
			while((found = nameregex.exec(text)) != null) {
			    pos.push([found.index, found[0].length]);
			}
			var urlregex = /(^|\b)(https?:\/\/[\w-]+(\.[\w-]+)+([\w., @?^=%&:/~+#\-()]*[\w@?^=%&/~+#\-()])?|(i\.)?imgur\.com\/[\w\-.?#]+)/ig;
			while((found = urlregex.exec(text)) != null) {
			    pos.push([found.index, found[0].length]);
			}
			pos.sort((a, b) => b - a);
			for(let j = 0; j < pos.length; j++) {
			    var rightpart = text.slice(pos[j][0] + pos[j][1]);
			    var highlighttext = text.slice(pos[j][0], pos[j][0] + pos[j][1]);
			    text = text.slice(0, pos[j][0]);
			    textnode.nodeValue = text;
			    let highlight;
			    if(nameregex.test(highlighttext)) {
				highlight = element(
				    ["span#highlight", {
					class: "mentioned"
				    }, highlighttext]
				).highlight;
			    } else {
				highlight = element(
				    ["a#highlight", {
					href: highlighttext,
					target: "_blank",
					rel: "noreferrer"
				    }, highlighttext]
				).highlight;
			    }
			    insertAfter(highlight, textnode);
			    insertAfter(document.createTextNode(rightpart), highlight);
			}
		    } // ending cat's if() statement
		}
	    }
	});
	chatpanel.scrollTop = chatpanel.scrollHeight - chatpanel.offsetHeight;
	initial = 0;
    }).observe(chatbox, {childList: 1});

    // Notify when a user joins or leaves in chat
    // TODO: make this actually in response to joining or leaving, rather than on an interval
    setInterval(function() {
	if(initial) {
	    if(changedusers.length) {
		initial = 0;
		changedusers = [];
	    }
	} else {
	    var actualchanges = {};
	    for(let i = 0; i < changedusers.length; i++) {
		// maintain a running tally of all the times that someone has joined or left
		// so that we can see if it cancels out
		actualchanges[changedusers[i][1]] = (actualchanges[changedusers[i][1]] || 0) + changedusers[i][0];
	    }
	    // parse the running tally
	    var joined = [];
	    var left = [];
	    for(let i in actualchanges) {
		if(!ignoredusers[i.toLowerCase()]) {
		    if(actualchanges[i] > 0) {
			joined.push(i);
		    } else if(actualchanges[i] < 0) {
			left.push(i);
		    }
		}
	    }
	    // assemble into a chat message
	    var message = [];
	    if(left.length) {
		message.push(left.join(", ") + " left");
	    }
	    if(joined.length) {
		message.push(joined.join(", ") + " joined");
	    }
	    message = message.join(". ");
	    // overwrite previous joined/left message or make a new one
	    if(message) {
		if(lastdiv) {
		    lastdiv.firstChild.nodeValue = message;
		} else {
		    chatmessage(message);
		}
	    } else if(lastdiv) {
		chatbox.removeChild(lastli);
		lastli = lastdiv = null;
	    }
	}
    }, 1000);

    // Chat box extensions
    chatinput.maxLength = maxChatMsgLen;
    chatinput.onkeydown = function(event) {
	if(event.keyCode == 13) { // Enter
	    event.preventDefault();
	    var text = event.currentTarget.value;
	    sentmessages.unshift(text);
	    sentindex = -1;
	    event.currentTarget.value = text.replace(/[^\da-z`~!@#$%^&*()\-_=+[\]{};"\\:'"|, .\/<>? ]+/gi, jsesc).slice(0, maxChatMsgLen);
	    document.getElementById("chat-send-btn").click();
	} else if(event.keyCode == 38) { // Up
	    event.preventDefault();
	    sentindex++;
	    if(sentindex >= sentmessages.length) {
		sentindex = sentmessages.length - 1;
	    }
	    if(sentindex > -1) {
		event.currentTarget.value = sentmessages[sentindex];
		event.currentTarget.selectionStart = event.currentTarget.selectionEnd = event.currentTarget.value.length;
	    }
	} else if(event.keyCode == 40) { // Down
	    event.preventDefault();
	    sentindex--;
	    if(sentindex < 0) {
		sentindex = -1;
		event.currentTarget.value = "";
	    } else {
		event.currentTarget.value = sentmessages[sentindex];
		event.currentTarget.selectionStart = event.currentTarget.selectionEnd=event.currentTarget.value.length;
	    }
	}
    };

    function blurchat() {
	var canvas = document.querySelector("#display>div>div>div");
	if(canvas && !canvas.onmousedown) {
	    canvas.onmousedown = function() {
		document.getElementById("chat-input").blur();
	    };
	}
    }
    blurchat();
    setInterval(blurchat, 500);

    // cat stuff
    document.querySelector("#vote-btn").textContent = "Vote Yes";
    addButton("Vote No", voteNoForReset, rootButtonHolder);
    var cannedKeysHolder = document.createElement("div");
    addButton("Go to serial0", goToSerial0, cannedKeysHolder);
    addButton("Come from serial0", comeFromSerial0, cannedKeysHolder);
    addButton("C-M-<del>", ctrlAltDel, cannedKeysHolder);
    rootButtonHolder.appendChild(cannedKeysHolder);
    var typeHolder = document.createElement("div");
    addButton("Autotyper", typePrompt, typeHolder);
    addButton("Set autotyper speed", setAutotyperSpeed, typeHolder);
    rootButtonHolder.appendChild(typeHolder);
    var otpHolder = document.createElement("div");
    addButton("Show Daily 1TP", alertDailyPassword, otpHolder);
    addButton("Type Daily 1TP", typeDailyPassword, otpHolder);
    addButton("Show Daily Insecure/Leaked 1TP", alertLeakedDailyPassword, otpHolder);
    rootButtonHolder.appendChild(otpHolder);
    // end cat stuff
}


element(
    document.head,
    ["style", `
.greentext{
	color:#789922;
}
.redtext{
    color:#f04747;
}
.bluetext{
    color:#208d99;
}
.blindyourasstext{
color:#000000;
background-color:#ffffff;
}
.mentioned{
	background-color: #000;
	color:#ffff88;
}
[data-time]::before{
	content:attr(data-time);
	font-size:12px;
	padding-right:3px;
}
.ignoredialog{
	position:absolute;
	background:#eee;
	cursor:default;
	z-index:1;
	outline:none;
}
.ignoredialog:not(:focus) {
	top:-999px!important
}
.ignoredialog>div{
	min-width:150px;
	overflow:hidden;
	display:flex;
	justify-content:center;
	flex-direction:column;
	padding:5px;
	padding:5px 5px 5px calc(1em + 5px);
}
.ignoredialog>div:hover{
	background:#e6e6e6;
}
.ignoredialog.ignored>div::before {
	content:"\\2713";
	position:absolute;
	margin-left:-1em;
}
#display :not(:first-child) {
	pointer-events:none;
}
#chat-box a {
  color: #00f;
}
.cvmutils-upd8-notif {
  background-color: #fcc;
  font-weight: bold;
  color: #000;
}
.username, #online-users>.list-group-item {
  font-family: monospace;
}
`]
)
// functions added by cat

function voteNoForReset() {
    tunnel.sendMessage("vote", "0");
}

function goToSerial0() {
    tunnel.sendMessage("key", 65507, 1); // enable CTRL
    tunnel.sendMessage("key", 65513, 1); // enable ALT
    tunnel.sendMessage("key", 50, 1); // 2
    tunnel.sendMessage("key", 50, 0);
    tunnel.sendMessage("key", 65513, 0);
    tunnel.sendMessage("key", 65507, 0);
}

function comeFromSerial0() {
    tunnel.sendMessage("key", 65507, 1); // enable CTRL
    tunnel.sendMessage("key", 65513, 1); // enable ALT
    tunnel.sendMessage("key", 49, 1); // 1
    tunnel.sendMessage("key", 49, 0);
    tunnel.sendMessage("key", 65513, 0);
    tunnel.sendMessage("key", 65507, 0);
}

function ctrlAltDel() {
    tunnel.sendMessage("key", 65507, 1); // enable CTRL
    tunnel.sendMessage("key", 65513, 1); // enable ALT
    tunnel.sendMessage("key", 65535, 1); // DEL
    tunnel.sendMessage("key", 65535, 0);
    tunnel.sendMessage("key", 65513, 0);
    tunnel.sendMessage("key", 65507, 0);
}

function turn() {
    tunnel.sendMessage("turn");
}



// chars that we have to press SHIFT to type
var shiftSpecialCharsStr = "!\"#$%&()*+:<>?@|~{}_";
var shiftSpecialChars = (function(str) {
    var x = new Array(str.length);
    for(var i = 0; i < str.length; i++) {
	x[i] = str.charCodeAt(i);
    }
    return x;
})(shiftSpecialCharsStr);

function writeRawCharacter(character) {
    turn();
    console.log("writing character", String.fromCharCode(character));
    var s = shiftSpecialChars.indexOf(character);
    if(s === -1) {
	tunnel.sendMessage("key", 65505, 0);
	tunnel.sendMessage("key", character, 1);
	tunnel.sendMessage("key", character, 0);
    } else {
	tunnel.sendMessage("key", 65505, 1);
	tunnel.sendMessage("key", character, 1);
	tunnel.sendMessage("key", character, 0);
	tunnel.sendMessage("key", 65505, 0);
    }
}

function writeRawString(rawString) {
    var isString = typeof rawString == "string";
    for(var i = 0; i < rawString.length; i++) {
	var character = isString ? rawString.charCodeAt(i) : rawString[i];
	console.log("preparing to write raw character", String.fromCharCode(character));
	setTimeout(writeRawCharacter.bind(null, character), typerDelay * i);
    }
}

function setAutotyperSpeed() {
    typerDelay = parseInt(prompt("How many milliseconds between characters? (Default 125; too fast may cause errors)")) || 125;
}

function leftRotate(number, bits, totalBits) {
    var mask = 0xff;
    bits &= mask;
    return ((number << bits) & (1 << totalBits - 1)) | (number >> (-bits & mask));
}

function generatorAsyncDailySecret(mode) {
    if(mode === undefined) mode = 1;
    const leakedSecret = [0xee, 0x03, 0x20, 0x0a, 0x7d, 0x3f, 0x3c, 0xb2, 0x30, 0x9d, 0xac, 0x91, 0xcb, 0x79, 0x7e, 0x89, 0x7e, 0x71, 0x4d, 0x4d, 0x93, 0xdf, 0xcd, 0xc7, 0x96, 0x78, 0x3b, 0xb5]; // icattellyou posted a version of the script containing this secret to the collabvm discord; it is now no longer to be used for secure purposes, only for quick, insecure interoperability with old script versions
    const trueSecret = [0x12, 0xb7, 0xdf, 0xcb, 0x0e, 0xa6, 0xdb, 0xd1, 0x84, 0x2b, 0x33, 0x21, 0x60, 0xa1, 0xbc, 0x41, 0x3f, 0xf2, 0x29, 0x6f, 0xde, 0x77, 0x96, 0x44, 0x44, 0xbc, 0xee, 0x88];
    const secretModes = [leakedSecret, trueSecret];
    var secret = secretModes[mode];
    var memoizedSecret;
    return function() {
	if(memoizedSecret === undefined) {
	    var unixTime = new Date().getTime();
	    var dayNumber = (unixTime / 86400000) | 0;
	    var dayNumberBytes = [dayNumber & 0xff, (dayNumber >> 8) & 0xff, (dayNumber >> 16) & 0xff, (dayNumber >> 24) & 0xff];
	    var dailyBytes = Array.concat(secret, dayNumberBytes);
	    return crypto.subtle.digest("SHA-256", Uint8Array.from(dailyBytes)).then(function(digest) {
		memoizedSecret = new Uint8Array(digest);
		return memoizedSecret;
	    });
	} else {
	    return new Promise((resolve, reject) => resolve(memoizedSecret));
	}
    };
}

var asyncGenerateDailySecret = generatorAsyncDailySecret();

var asyncGenerateDailyPassword = function() {
    return asyncGenerateDailySecret().then(secret => btoa(String.fromCharCode.apply(null, secret)));
};

var asyncGenerateLeakedDailySecret = generatorAsyncDailySecret(0);
var asyncGenerateLeakedDailyPassword = function() {
    return asyncGenerateLeakedDailySecret().then(secret => btoa(String.fromCharCode.apply(null, secret)));
};

function alertDailyPassword() {
    asyncGenerateDailyPassword().then(alert);
}

function alertLeakedDailyPassword() {
    asyncGenerateLeakedDailyPassword().then(alert);
}

function typeDailyPassword() {
    asyncGenerateDailyPassword().then(writeRawString);
}

function typePrompt() {
    var str = prompt("What do you want to type into the VM?");
    if(str != null) {
	writeRawString(str);
    }
}

const updateSymmetricKey = Uint8Array.of(0xfb, 0xf0, 0x87, 0xdc, 0x0c, 0x96, 0x9f, 0x2f, 0xd5, 0x1f, 0xa4, 0x9e, 0x0f, 0xc5, 0xc2, 0xa1, 0x80, 0xb7, 0x76, 0xc2, 0x85, 0xd3, 0xf3, 0x39, 0x15, 0xa6, 0x9f, 0xa1, 0xda, 0x69, 0x9c, 0xef);

function asyncDecryptUpdate(bytes) {
    let iv = bytes.slice(0, 16);
    let encryptedData = bytes.slice(16);
    return new Promise((resolve, reject) =>
		       crypto.subtle.importKey("raw",
					       updateSymmetricKey,
					       { "name": "aes-cbc" },
					       false,
					       ["decrypt"]).then(function(key) {
						   crypto.decrypt({
						       name: "AES-CBC",
						       iv: iv
						   }, key, encryptedData).then(resolve).catch(reject);
					       }).catch(reject));
}

function asyncVerifyUpdate(bytes) {
    let ubytes = Uint8Array.from(bytes);
    let sha256expected = ubytes.slice(0, 32);
    let protectedData = ubytes.slice(32);
    return new Promise((resolve, reject) =>
		       crypto.subtle.digest("SHA-256", protectedData).then(sha256actual => {
			   let udigest = Uint8Array.from(sha256actual);
			   let ok = true;
			   for(let i = 0; i < 32; i++)
			       if(udigest[i] !== sha256expected[i]) {
				   ok = false;
				   reject("Digest mismatch; apparent tampering by courier!");
			       }
			   if(ok)
			       resolve(protectedData);
		       }).catch(reject));
}

function asyncFetchAndDecryptUpdate(url) {
    return new Promise((resolve, reject) => {
	var rq = new XMLHttpRequest();
	rq.responseType = "arraybuffer";
	rq.onreadystatechange = function() {
	    if(rq.readyState == 4) {
		if(rq.status >= 200 && rq.status < 300) {
		    asyncDecryptUpdate(rq.response).then(function(bytes) {
			asyncVerifyUpdate(bytes).then(resolve).catch(reject);
		    }).catch(reject);
		} else {
		    reject(rq.statusText);
		}
	    }
	};
	rq.open("GET", url, true);
	rq.send();
    });
}

function asyncTryInstallUpdate(url) {
    asyncFetchAndDecryptUpdate(url).then(bytes => {
	// verify magic header
	// (ASCII text // ==)
	if(bytes[0] != 0x2f ||
	   bytes[1] != 0x2f ||
	   bytes[2] != 0x20 ||
	   bytes[3] != 0x3d ||
	   bytes[4] != 0x3d) {
	    alert("Corrupt script or decryption failure");
	} else {
	    window.open("data:text/javascript;base64, " + btoa(String.fromCharCode.apply(null, bytes)));
	}
    }).catch(error => alert("Encountered error while fetching and decrypting: " + error));
}

function addButton(name, funct, holder) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.textContent = name;
    button.addEventListener("click", funct);
    holder.appendChild(button);
}

window.installTunnelHook = function () { // designed to be manually invoked to log all tunnel messages to reverse-engineer the CollabVM client's controls
    tunnel.sendMessage = withAdviceBefore(tunnel.sendMessage, console.log);
};
// end of cat stuff

function chatmessage(text) {
    lastli = document.createElement("li");
    lastdiv = document.createElement("div");
    lastdiv.appendChild(document.createTextNode(text));
    lastli.appendChild(lastdiv);
    chatbox.appendChild(lastli);
}
function asyncStrToColor(str) {
    // chrome is ass
    /*
    let zx = [];
    for(let i = 0; i < str.length; i++) {
	// assuming this is a single UTF-16 bytepair!!!!!!
	let utf16bp = str.charCodeAt(i);
	zx[i] = utf16bp;
    }
    return crypto.subtle.digest("SHA-256", Uint16Array.from(zx)).then(digest => "#" + Array.from(new Uint8Array(digest).slice(0, 3)).map(byte => byte.toString(16).padStart(2, "0")).join(""));
    */
    let zx = [];
    for(let i = 0; i < str.length; i++) {
	let utf16bp = str.charCodeAt(i);
	zx[i] = utf16bp;
    }
    let r = 0;
    let g = 0;
    let b = 0;
    for(let i = 0; i < str.length; i += 3) {
	r ^= (zx[i] || 0) >> (g & 1);
	g ^= (zx[i + 1] || 0) >> (b & 1);
	b ^= (zx[i + 2] || 0) >> (r & 1);
    }
    return new Promise((resolve, reject) => resolve("#" + (r & 0xff).toString(16).padStart(2, "0") + (g & 0xff).toString(16).padStart(2, "0") + (b & 0xff).toString(16).padStart(2, "0")));
}
function element() {
    var parent;
    var lasttag;
    var createdtag;
    var toreturn = {};
    for(var i = 0; i < arguments.length; i++) {
	var current = arguments[i];
	if(current) {
	    if(current.nodeType) {
		parent = lasttag = current;
	    } else if(Array.isArray(current) && current.length > 0) {
		if(typeof current[0] == "string") {
		    var tagNameSplitIdx = current[0].indexOf("#");
		    var tagName = tagNameSplitIdx === -1 ? current[0] : current[0].substring(0, tagNameSplitIdx);
		    var tagId = tagNameSplitIdx === -1 ? undefined : current[0].substring(tagNameSplitIdx + 1);
		    lasttag = createdtag = document.createElement(tagName);
		    if(tagId !== undefined)
			toreturn[tagId] = createdtag;
		}
		for(var j = 1; j < current.length; j++) {
		    if(current[j]) {
			if(current[j].constructor == Object) {
			    if(lasttag) {
				for(var value in current[j]) {
				    if(value != "style" && value in lasttag) {
					lasttag[value] = current[j][value];
				    } else {
					lasttag.setAttribute(value, current[j][value]);
				    }
				}
			    }
			} else {
			    var returned = element(lasttag, current[j]);
			    for(var k = 0; k < returned.length; k++) {
				toreturn[k] = returned[k];
			    }
			}
		    }
		}
	    } else if(current) {
		createdtag = document.createTextNode(current);
	    }
	    if(parent&&createdtag) {
		parent.appendChild(createdtag);
	    }
	    createdtag = 0;
	}
    }
    return toreturn;
}
function insertAfter(append, target) {
    var parent = target.parentNode;
    var next = target.nextSibling;
    if(next) {
	parent.insertBefore(append, next);
    } else {
	parent.appendChild(append);
    }
}
function jsesc(argument){
	var result=''
	for(var i=0;i<argument.length;i++){
		var character=argument.charAt(i)
		var first=argument.charCodeAt(i)
		if(first>=55296&&first<=56319&&argument.length>i+1){
			var second=argument.charCodeAt(i+1)
			if(second>=56320&&second<=57343){
				result+='\\u{'+hex+'}'
				i++
				continue
			}
		}
		var hex=character.charCodeAt(0).toString(16)
		var longhand=hex.length>2
		result+='\\'+(longhand?'u':'x')+('0000'+hex).slice(longhand?-4:-2)
	}
	return result
}
