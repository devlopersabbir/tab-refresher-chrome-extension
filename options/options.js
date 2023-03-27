const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  setTimeout(() => {
    location.reload.bind(location);
  }, 3000);
});
