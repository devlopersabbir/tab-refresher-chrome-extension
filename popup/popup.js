const num = document.getElementById("num");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click", () => {
  const time = num.value;

  if (time <= 2) return console.log("please increase time");

  chrome.storage.sync.set(
    {
      time,
    },
    () => {
      console.log(time);
    }
  );
});

// chrome.storage.sync.get(["time"], (res) => {
//   num.value = res?.time ?? "2";
//   const resValue = res?.time * 1000;

//   let resTime = res?.time;
//   const timerId = setInterval(() => {
//     resTime--;
//     console.log(resTime);

//     if (resTime === 0) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// });
