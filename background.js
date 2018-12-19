chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.onClicked.addListener(function() {
    gotoVideo()
  })
});

function gotoVideo() {
  fetch('video_links.txt')
    .then((response) => response.text())
    .then((text) => {
      ids = text.split("\n")
      baseurl = "https://www.youtube.com/watch?v="
      random_id = ids[Math.floor(Math.random()*ids.length)]
      chrome.tabs.create({url: baseurl + random_id})
    })
};
