// ==UserScript==
// @name          CollabVM dark theme
// @description   read the name and u will understand what it does
// @license       ISC; https://github.com/CollabVM-Unofficial/New-CollabVM/blob/master/LICENSE
// @namespace     https://github.com/CollabVM-Unofficial/New-CollabVM
// @version       1.0.1
// @include       http://computernewb.com/collab-vm/*
// @run-at        document-end
// @grant         none
// @downloadURL   https://raw.githubusercontent.com/forkiesassds/New-CollabVM/master/collabvm-dark-theme.user.js
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAFYElEQVR4nOycvW7kNhCAh0FeIW+RFGlsIA6STdLkp0iRbZ2HiBtvqk0Tp3EeIm5zxTZXnvcM+3B2fYBb9/cAV+pAemfNpUmKP0NxqNUHGNpbwxLvG2o4oih9AhNVmMRXYhJfiUl8JT6t3YACdNpnUbEdXtg2LAEl/Pbm/+0Xh0dz/Mju/8muQQk8E27CMQBsGpJAr3ATTgGo3oAEooWbcAhAa4Nrd352nL0TDNrh0RwH4sED0FKPV9JPFhfqHxiAr7/5NXvHNc6A5sQjrQegWfFIqwFoXjzSWgBGIx5pJQCjE49QBuD6aqXvk8RZa+XkM1AwaJL1z08BePw+JgCGcFWGbkrQbPnNitdlIJgScgNgE05Nc+J9MrQLI7WNDYBLOH5PMV4gTeV4COx9ukDXuGCOAeARbqQa2JdUEy38j9P/1Fb2UCnKJt88AyBMOBmcxScLv3vzIvggOA0ht65Us/hzmdJ+LxzFDyLchkv42d/LUff4asJ15PF14bB7AUUGB/FkwuXvcysPKd0U3nWd9Xg51BRPKhy2VUxe2aenlRLCkRriiwiX/HTawclCwO1NungpHYX/+8/vaktZvyNDii8qnKSBhvCnwbZN8eyFI6bw77/9HF69fqc+67mfgpLimxGO6MLByPeU0qGg+KApXC7CdaT0kmUkQi1emZHSUaZtgOIoHGmtqtmmFWw0CjcDAEyFI3pVo7fv8P0cbj+jmx7OFd+bx80AAFPh4OjhOKhSSodM8ds8fvDVb2rrOyVlAKR8uTXTTm3hiNl+fXLs4GgOd4Q3REhSja1Xh4DSawsPgVI6UD+YoOfxEFqQTl1GIuyeCHl5VrsFT5SSDpzEo/CfF7VbMgxsxO+LcISN+H2DnXhOOR6RZSX1fVcOd6AUUrhMN5xSjnkLkBI24jkLLxEANuIp+PD2u6y/7xOOUxsUsBOPKScGFD6bzWC9Xicfu0/4KFcLp+R4XbgP31I+nR7hQLnkkY14CuHL5VLNMFom68TJ4mJ7r8DFEMIRNuJD8AmHzbSuLt3IyUqeLwBDCEeaEB8iXCJWQs2b9+RkZwCGEI6wFh8qHIRQ07bn98dwfb/aWQHsYScAlANnCDniVd6keNLaJFQ4ppVr2Yarla3Hhsw5V3lGILfHk8qPFu7PySTPKpWCJNWElmsudOEPDw/b7xOEs5atk32zW3+yIkW+lH65XoPoAGZ/Pfb0UOHGyyBsgyjbQJANrvoLHmKQvVysL6EDASJSuAVTttDyPKsAkOb4VPnSiRBpwgMeBrMNtNWDQNHjg64KbUjRQogc4RAh0Rx4Xb8bBKpUs1MThyJFS+k/zL5Ql+uFhDvbqzH42UB9ASUCa+ctUv4vP365s7AJzxxL9QKFxNjOhqIBKHHlGlzbm2Jtz57iPgOPTVHFmGNCkQCUjOqzvI9L+BDPQJzarhLlI8uqKIRuU+93ErnF7wocpySd8ZPFkFEsOYCl9PSY9pC/xXXI2ckSQU5JAzaJvv1Yxyv595uCICm9tZS3bKd3lnATTy/2XqekTCm3Ij5n0KR8Fa7r5sloe3xyDi/0Ktzs8aoV8RCRz3uFxz6zuu9v4UO8pVyM8JoBYLdoNQBh/CikcJf0vhVioQtSZW7f5Pem6nhqolNKao8vseyjRfFNCyff0QCMQnixHRZgVMKL75iAUQof7AAJjFr44AcKYC+EVzuggy7mdeMtC69+YAs7E1ApAXDBSTibBliIDoALjsIRNg2xkBwAzsIRdg2yEByAFoQjbBtmwRmAloQj7BtooeojNFQ001ALrBahTjRCizdCRsEkvhKT+EpM4isxia/EJL4Sk/hKfAwAAP//B6BFHurIs+cAAAAASUVORK5CYII=
// ==/UserScript==
"use strict";
// TODO: vm.getgle.org

var styleElem = document.createElement("style");
styleElem.type = "text/css";
styleElem.innerHTML = `
body {
  background-color: #222;
}
.navbar>.container-fluid, .thumbnail {
  background-color: #333 !important;
  background-image: none !important;
}
.btn {
  background-color: #333 !important;
  background-image: none !important;
  border-color: #444 !important;
  color: #ccc !important;
  text-shadow: none !important;
}
.list-group-item.disabled {
  background-color: #444 !important;
  color: #ccc;
  filter: none;
}
.list-group-item {
    background-color: black;
}
#chat-panel, #chat-input, #chat-user, .guac-keyboard-disabled, .modal-content, .alert {
    color: white;
    background-color: #111;
}
.message-pane li {
    border-bottom: 1px solid #333;
    box-shadow: 0 1px 0 0 #666;
}
.navbar, .page-header, .thumbnail {
  border-color: #444 !important;
  border-bottom-color: #444 !important;
}
.navbar-brand, .navbar-collapse>ul>li>a, .page-header>h2, #vm-list, .thumbnail>.caption>h4 {
  color: #ddd !important;
}
.username::before {
    color: #fff;
}
.username, .message-pane .username {
    color: white;
}
.input-group-addon, .form-control {
    border-color: #333;
}
.list-group-item {
    border-color: #444;
}
.panel {
    border-color: #444;
}
.message-pane li:hover {
    background-color: #2b2b2b;
}
.has-turn.list-group-item {
    background-color: #365c6b;
    color: white;
}
.waiting-turn.list-group-item {
    background-color: #66662C;
    color: white;
}
.alert-info {
    background-image: none;
    border-color: #434343;
    color: white;
}
`;
document.head.appendChild(styleElem);
