chrome.runtime.onInstalled.addListener(function() {

	chrome.contextMenus.create({ 
		id: "RaspagemFL", 
		title: "Raspar dados", 
		type: "normal", 
		contexts: ["page"],
		"documentUrlPatterns": ["https://www.tiktok.com/@*"]
	});	
});


chrome.contextMenus.onClicked.addListener(function(item, tab) {
		"use strict";
		if(item.menuItemId == "RaspagemFL"){	
			chrome.tabs.executeScript(tab.id, {code: "btnDireitoRaspar = true;", allFrames:true}, function() { chrome.tabs.executeScript(tab.id, {file: "raspagem.js", allFrames:true});});			
		}	
});
