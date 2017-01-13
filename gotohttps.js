const URL = document.URL
window.location.href = "https://" + URL.substr(URL.indexOf("://") + "://".length)
