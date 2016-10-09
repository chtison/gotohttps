chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript({
		code: 'window.location.href = "https://" + document.URL.split("://")[1]'
	});
});
