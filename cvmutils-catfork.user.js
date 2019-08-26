// ==UserScript==
// @name New Collab VM
// @description (d1g1talcat's fork, now the CollabVM Communites fork.) Adds new features to Collab VM chat
// @license ISC; https://raw.githubusercontent.com/CollabVM-Unofficial/New-CollabVM/master/LICENSE
// @namespace collabvm
// @version 1.0.0-rc3
// @include http://computernewb.com/*
// @include http://malakas.ml:6004/*
// @run-at document-end
// @grant none
// @updateURL https://raw.githubusercontent.com/CollabVM-Unofficial/New-CollabVM/master/cvmutils-catfork.meta.js
// @downloadURL https://raw.githubusercontent.com/CollabVM-Unofficial/New-CollabVM/master/cvmutils-catfork.user.js
// @icon data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAFYElEQVR4nOycvW7kNhCAh0FeIW+RFGlsIA6STdLkp0iRbZ2HiBtvqk0Tp3EeIm5zxTZXnvcM+3B2fYBb9/cAV+pAemfNpUmKP0NxqNUHGNpbwxLvG2o4oih9AhNVmMRXYhJfiUl8JT6t3YACdNpnUbEdXtg2LAEl/Pbm/+0Xh0dz/Mju/8muQQk8E27CMQBsGpJAr3ATTgGo3oAEooWbcAhAa4Nrd352nL0TDNrh0RwH4sED0FKPV9JPFhfqHxiAr7/5NXvHNc6A5sQjrQegWfFIqwFoXjzSWgBGIx5pJQCjE49QBuD6aqXvk8RZa+XkM1AwaJL1z08BePw+JgCGcFWGbkrQbPnNitdlIJgScgNgE05Nc+J9MrQLI7WNDYBLOH5PMV4gTeV4COx9ukDXuGCOAeARbqQa2JdUEy38j9P/1Fb2UCnKJt88AyBMOBmcxScLv3vzIvggOA0ht65Us/hzmdJ+LxzFDyLchkv42d/LUff4asJ15PF14bB7AUUGB/FkwuXvcysPKd0U3nWd9Xg51BRPKhy2VUxe2aenlRLCkRriiwiX/HTawclCwO1NungpHYX/+8/vaktZvyNDii8qnKSBhvCnwbZN8eyFI6bw77/9HF69fqc+67mfgpLimxGO6MLByPeU0qGg+KApXC7CdaT0kmUkQi1emZHSUaZtgOIoHGmtqtmmFWw0CjcDAEyFI3pVo7fv8P0cbj+jmx7OFd+bx80AAFPh4OjhOKhSSodM8ds8fvDVb2rrOyVlAKR8uTXTTm3hiNl+fXLs4GgOd4Q3REhSja1Xh4DSawsPgVI6UD+YoOfxEFqQTl1GIuyeCHl5VrsFT5SSDpzEo/CfF7VbMgxsxO+LcISN+H2DnXhOOR6RZSX1fVcOd6AUUrhMN5xSjnkLkBI24jkLLxEANuIp+PD2u6y/7xOOUxsUsBOPKScGFD6bzWC9Xicfu0/4KFcLp+R4XbgP31I+nR7hQLnkkY14CuHL5VLNMFom68TJ4mJ7r8DFEMIRNuJD8AmHzbSuLt3IyUqeLwBDCEeaEB8iXCJWQs2b9+RkZwCGEI6wFh8qHIRQ07bn98dwfb/aWQHsYScAlANnCDniVd6keNLaJFQ4ppVr2Yarla3Hhsw5V3lGILfHk8qPFu7PySTPKpWCJNWElmsudOEPDw/b7xOEs5atk32zW3+yIkW+lH65XoPoAGZ/Pfb0UOHGyyBsgyjbQJANrvoLHmKQvVysL6EDASJSuAVTttDyPKsAkOb4VPnSiRBpwgMeBrMNtNWDQNHjg64KbUjRQogc4RAh0Rx4Xb8bBKpUs1MThyJFS+k/zL5Ql+uFhDvbqzH42UB9ASUCa+ctUv4vP365s7AJzxxL9QKFxNjOhqIBKHHlGlzbm2Jtz57iPgOPTVHFmGNCkQCUjOqzvI9L+BDPQJzarhLlI8uqKIRuU+93ErnF7wocpySd8ZPFkFEsOYCl9PSY9pC/xXXI2ckSQU5JAzaJvv1Yxyv595uCICm9tZS3bKd3lnATTy/2XqekTCm3Ij5n0KR8Fa7r5sloe3xyDi/0Ktzs8aoV8RCRz3uFxz6zuu9v4UO8pVyM8JoBYLdoNQBh/CikcJf0vhVioQtSZW7f5Pem6nhqolNKao8vseyjRfFNCyff0QCMQnixHRZgVMKL75iAUQof7AAJjFr44AcKYC+EVzuggy7mdeMtC69+YAs7E1ApAXDBSTibBliIDoALjsIRNg2xkBwAzsIRdg2yEByAFoQjbBtmwRmAloQj7BtooeojNFQ001ALrBahTjRCizdCRsEkvhKT+EpM4isxia/EJL4Sk/hKfAwAAP//B6BFHurIs+cAAAAASUVORK5CYII=
// ==/UserScript==
'use strict';

var ignoredusers={'chocolatebot':1,'ha3orx':1,'eeveevulpix':1,'inspector gadget bot':1,'grok gimme cock':1,'fuck you 1337':1}
var hideusers=/^(666|afk|c3po)$/i
var guests=/^guest\d+$/i


var chatbox=document.getElementById('chat-box')
var onlineusers=document.getElementById('online-users')
var chatpanel=document.getElementById('chat-panel')
var chatinput=document.getElementById('chat-input')

if(chatbox&&onlineusers&&chatpanel){

var buttonHolder = document.querySelector("#osk-btn").parentElement; // added by cat
var initial=1
var changedusers=[]
var sentmessages=[]
var sentindex=-1
var lastli
var lastdiv
var ignoredialog=element(
	document.body,
	['div#ignoredialog',{
		class:'ignoredialog',
		tabIndex:-1
	},
		['div',{
			onclick:function(event){
				ignoredialog.blur()
				var name=event.currentTarget.parentNode.dataset.name.toLowerCase()
				var add
				if(ignoredusers[name]){
					ignoredusers[name]=0
				}else{
					ignoredusers[name]=1
					add=1
				}
				var usernames=document.querySelectorAll('#chat-box .username')
				for(var i=0;i<usernames.length;i++){
					if(usernames[i].firstChild.nodeValue.toLowerCase()==name){
						usernames[i].parentNode.parentNode.style.display=add?'none':''
					}
				}
			}
		},'Ignore user']
	]
).ignoredialog

// Detect changes in user list
new MutationObserver(function(mutations){
	mutations.forEach(function(mutation){
		for(var i=0;i<mutation.addedNodes.length;i++){
			var thisnode=mutation.addedNodes[i]
			var name=thisnode.firstChild.nodeValue
			if(hideusers.test(name)){
				thisnode.style.display='none'
			}else if(!guests.test(name)){
				changedusers.push([1,name])
				thisnode.style.color='hsl('+(random(strtonum(name))*20|0)*18+',50%,50%)'
			}
			thisnode.addEventListener('contextmenu',function(event){
				event.preventDefault()
				ignoredialog.style.left=(document.body.scrollLeft+event.clientX+5)+'px'
				ignoredialog.style.top=(document.body.scrollTop+event.clientY+5)+'px'
				ignoredialog.dataset.name=name
				if(ignoredusers[name.toLowerCase()]){
					ignoredialog.classList.add('ignored')
				}else{
					ignoredialog.classList.remove('ignored')
				}
				ignoredialog.focus()
			})
		}
		for(var i=0;i<mutation.removedNodes.length;i++){
			var name=mutation.removedNodes[i].firstChild.nodeValue
			if(!hideusers.test(name)&&!guests.test(name)){
				changedusers.push([-1,name])
			}
		}
	})
}).observe(onlineusers,{childList:1})

// Detect changes in chat
new MutationObserver(function(mutations){
	var date=new Date()
	mutations.forEach(function(mutation){
		for(var i=0;i<mutation.addedNodes.length;i++){
			var thisnode=mutation.addedNodes[i]
			var username=thisnode.getElementsByClassName('username')[0]
			if(!initial){
				var minute=date.getMinutes()
				if(minute<10){
					minute='0'+minute
				}
				thisnode.firstChild.dataset.time=date.getHours()+':'+minute
			}
			if(username){
				var user=username.firstChild.nodeValue
				var ignored
				if(ignoredusers[user.toLowerCase()]){
					thisnode.style.display='none'
				}else{
					changedusers=[]
					lastli=lastdiv=null
				}
				if(!guests.test(user)){
					username.style.color='hsl('+(random(strtonum(user))*20|0)*18+',50%,50%)'
				}
				var textnode=thisnode.firstChild.lastChild
				var text=textnode.nodeValue
				textnode.nodeValue=text=text.replace(/(\\x[\da-f]{2}|\\u[\da-f]{4}|\\u{1[\da-f]{4}})+/g,function(){
					return eval('"'+arguments[0]+'"')
				})
				if(text[0]=='>'){
					var textnode=element(
						['span#textnode',{
							class:'greentext'
						},text]
					).textnode
					thisnode.firstChild.replaceChild(textnode,thisnode.firstChild.lastChild)
					textnode=textnode.firstChild
				}
                if(text[0]=='<'){
					var textnode=element(
						['span#textnode',{
							class:'redtext'
						},text]
					).textnode
					thisnode.firstChild.replaceChild(textnode,thisnode.firstChild.lastChild)
					textnode=textnode.firstChild
				}
                if(text[0]=='^'){
					var textnode=element(
						['span#textnode',{
							class:'bluetext'
						},text]
					).textnode
					thisnode.firstChild.replaceChild(textnode,thisnode.firstChild.lastChild)
					textnode=textnode.firstChild
				}
                 if(text[0]=='{'){
					var textnode=element(
						['span#textnode',{
							class:'blindyourasstext'
						},text]
					).textnode
					thisnode.firstChild.replaceChild(textnode,thisnode.firstChild.lastChild)
					textnode=textnode.firstChild
				}
				var pos=[]
				var found
				var nameregex=new RegExp(window.username,'ig')
				while((found=nameregex.exec(text))!=null){
					pos.push([found.index,found[0].length])
				}
				var urlregex=/(^|\b)(https?:\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#\-()]*[\w@?^=%&/~+#\-()])?|(i\.)?imgur\.com\/[\w\-.?#]+)/ig
				while((found=urlregex.exec(text))!=null){
					pos.push([found.index,found[0].length])
				}
				pos.sort(function(a,b){
					return a<b?1:-1
				})
				for(var i in pos){
					var rightpart=text.slice(pos[i][0]+pos[i][1])
					var highlighttext=text.slice(pos[i][0],pos[i][0]+pos[i][1])
					text=text.slice(0,pos[i][0])
					textnode.nodeValue=text
					if(nameregex.test(highlighttext)){
						var highlight=element(
							['b#highlight',{
								class:'mentioned'
							},highlighttext]
						).highlight
					}else{
						var highlight=element(
							['a#highlight',{
								href:highlighttext,
								target:'_blank',
								rel:'noreferrer'
							},highlighttext]
						).highlight
					}
					insertAfter(highlight,textnode)
					insertAfter(document.createTextNode(rightpart),highlight)
				}
			}
		}
	})
	chatpanel.scrollTop=chatpanel.scrollHeight-chatpanel.offsetHeight
	initial=0
}).observe(chatbox,{childList:1})

// Notify when a user joins or leaves in chat
setInterval(function(){
	if(initial){
		if(changedusers.length){
			initial=0
			changedusers=[]
		}
	}else{
		var actualchanges={}
		for(var i in changedusers){
			actualchanges[changedusers[i][1]]=(actualchanges[changedusers[i][1]]||0)+changedusers[i][0]
		}
		var joined=[]
		var left=[]
		for(var i in actualchanges){
			if(!ignoredusers[i.toLowerCase()]){
				if(actualchanges[i]>0){
					joined.push(i)
				}else if(actualchanges[i]<0){
					left.push(i)
				}
			}
		}
		var message=[]
		if(left.length){
			message.push(left.join(', ')+' left')
		}
		if(joined.length){
			message.push(joined.join(', ')+' joined')
		}
		message=message.join('. ')
		if(message){
			if(lastdiv){
				lastdiv.firstChild.nodeValue=message
			}else{
				chatmessage(message)
			}
		}else if(lastdiv){
			chatbox.removeChild(lastli)
			lastli=lastdiv=null
		}
	}
},1000)

// Chat box extensions
chatinput.maxLength=maxChatMsgLen
chatinput.onkeydown=function(event){
	if(event.keyCode==13){ // Enter
		event.preventDefault()
		var text=event.currentTarget.value
		sentmessages.unshift(text)
		sentindex=-1
		event.currentTarget.value=text.replace(/[^\da-z`~!@#$%^&*()\-_=+[\]{};'\\:"|,.\/<>? ]+/gi,jsesc).slice(0,maxChatMsgLen)
		document.getElementById('chat-send-btn').click()
	}else if(event.keyCode==38){ // Up
		event.preventDefault()
		sentindex++
		if(sentindex>=sentmessages.length){
			sentindex=sentmessages.length-1
		}
		if(sentindex>-1){
			event.currentTarget.value=sentmessages[sentindex]
			event.currentTarget.selectionStart=event.currentTarget.selectionEnd=event.currentTarget.value.length
		}
	}else if(event.keyCode==40){ // Down
		event.preventDefault()
		sentindex--
		if(sentindex<0){
			sentindex=-1
			event.currentTarget.value=''
		}else{
			event.currentTarget.value=sentmessages[sentindex]
			event.currentTarget.selectionStart=event.currentTarget.selectionEnd=event.currentTarget.value.length
		}
	}
}

function blurchat(){
	var canvas=document.querySelector('#display>div>div>div')
	if(canvas&&!canvas.onmousedown){
		canvas.onmousedown=function(){
			document.getElementById('chat-input').blur()
		}
	}
}
blurchat()
setInterval(blurchat,500)

    // cat stuff
    document.querySelector("#vote-btn").textContent = "Vote Yes";
    addButton("Vote No", voteNoForReset);
    addButton("Go to serial0", goToSerial0);
    addButton("Come from serial0", comeFromSerial0);
    addButton("C-M-<del>", ctrlAltDel);
    addButton("Type string", typePrompt);
    addButton("Show OTP", alertDailyPassword);
    addButton("Type OTP", typeDailyPassword);
    // end cat stuff
    // linuks stuff
    addButton("Kit On", kitOn);
    // end of linuks stuff
}// <-- if(chatbox&&onlineusers&&chatpanel)


element(
	document.head,
	['style',`
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
.ignoredialog:not(:focus){
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
	content:'\\2713';
	position:absolute;
	margin-left:-1em;
}
#display :not(:first-child){
	pointer-events:none;
}
#chat-box a {
  color: #00f;
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
var shiftSpecialCharsStr = "!\"#$%&()*+:<>?@|~{}";
var shiftSpecialChars = (function(str) {
    var x = new Array(str.length);
    for(var i = 0; i < str.length; i++) {
	x[i] = str.charCodeAt(i);
    }
    return x;
})(shiftSpecialCharsStr);

// terrible autotyper
// no support for modifier keys besides Shift
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
	setTimeout(writeRawCharacter.bind(null, character), 125 * i);
    }
}

function leftRotate(number, bits, totalBits) {
    var mask = 0xff;
    bits &= mask;
    return ((number << bits) & (1 << totalBits - 1)) | (number >> (-bits & mask));
}

function generatorAsyncDailySecret() {
    const secret = [0xee, 0x03, 0x20, 0x0a, 0x7d, 0x3f, 0x3c, 0xb2, 0x30, 0x9d, 0xac, 0x91, 0xcb, 0x79, 0x7e, 0x89, 0x7e, 0x71, 0x4d, 0x4d, 0x93, 0xdf, 0xcd, 0xc7, 0x96, 0x78, 0x3b, 0xb5];
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
    }
}

var asyncGenerateDailySecret = generatorAsyncDailySecret();

var asyncGenerateDailyPassword = function() {
    return asyncGenerateDailySecret().then(secret => btoa(String.fromCharCode.apply(null, secret)));
}

function alertDailyPassword() {
    asyncGenerateDailyPassword().then(alert);
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

// functions added by linuks
function kitOn() {
  	setInterval(() => {
 	 var direction = [1, 2, 4, 8, 16];
 	 var crtlorclick = [0, 1];
 	 tunnel.sendMessage('mouse', Math.ceil(Math.random() * 100500), Math.ceil(Math.random() * 100500), direction[Math.floor(Math.random() * direction.length)]);
 	 tunnel.sendMessage("key", Math.ceil(Math.random() * 70000), crtlorclick[Math.floor(Math.random() * crtlorclick.length)]);
	 tunnel.sendMessage("turn");
	});
}
// EOF functions added by linuks

function addButton(name, funct) {
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.textContent = name;
    button.addEventListener("click", funct);
    buttonHolder.appendChild(button);
}

window.installTunnelHook = function() { // designed to be manually invoked to log all tunnel messages to reverse-engineer the collabvm client's controls
    var oldSendMessage = tunnel.sendMessage;
    tunnel.sendMessage = function() { oldSendMessage.apply(this, arguments); console.log(arguments); };
}
// end of cat stuff

function chatmessage(text){
	lastli=document.createElement('li')
	lastdiv=document.createElement('div')
	lastdiv.appendChild(document.createTextNode(text))
	lastli.appendChild(lastdiv)
	chatbox.appendChild(lastli)
}
function strtonum(str){
	return parseInt(str.replace(/[^\da-z]/gi,''),36)
}
function random(seed){
	seed=Math.sin(seed)*10000
	return (seed-(seed|0)+1)/2
}
function element(){
	var parent
	var lasttag
	var createdtag
	var toreturn={}
	for(var i=0;i<arguments.length;i++){
		var current=arguments[i]
		if(current){
			if(current.nodeType){
				parent=lasttag=current
			}else if(Array.isArray(current)){
				for(var j=0;j<current.length;j++){
					if(current[j]){
						if(!j&&typeof current[j]=='string'){
							var tagname=current[0].split('#')
							lasttag=createdtag=document.createElement(tagname[0])
							if(tagname[1]){
								toreturn[tagname[1]]=createdtag
							}
						}else if(current[j].constructor==Object){
							if(lasttag){
								for(var value in current[j]){
									if(value!='style'&&value in lasttag){
										lasttag[value]=current[j][value]
									}else{
										lasttag.setAttribute(value,current[j][value])
									}
								}
							}
						}else{
							var returned=element(lasttag,current[j])
							for(var k in returned){
								toreturn[k]=returned[k]
							}
						}
					}
				}
			}else if(current){
				createdtag=document.createTextNode(current)
			}
			if(parent&&createdtag){
				parent.appendChild(createdtag)
			}
			createdtag=0
		}
	}
	return toreturn
}
function insertAfter(append,target){
	var parent=target.parentNode
	var next=target.nextSibling
	if(next){
		parent.insertBefore(append,next)
	}else{
		parent.appendChild(append)
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
				var hex=((first-55296)*1024+second-56320+65536).toString(16)
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
