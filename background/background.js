chrome.storage.sync.get(["time"], (res) => {
  let resTime = res?.time;

  if (resTime === undefined) return console.log("please set number");
  const timerId = setInterval(() => {
    resTime--;
    console.log(resTime);
    chrome.action.setBadgeText({
      text: `${resTime}`,
    });
    if (resTime === 0) {
      clearInterval(timerId);
      chrome.tabs.reload(() => {
        console.log("working");
      });
      console.log("done");
    }
  }, 1000);
});

const tab = chrome.tabs;
console.log(tab);
