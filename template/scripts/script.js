document.querySelector(".floatingBtn").addEventListener(
  "click",
  function () {
    this.classList.remove("floatingBtn");
  },
  true,
);

document.querySelector(".miniPlayer .close").addEventListener(
  "click",
  () => {
    document.querySelector(".miniPlayer").classList.add("floatingBtn");
  },
  true,
);

// tooptip
document.querySelector(".progress").addEventListener(
  "mouseover",
  () => {
    document.querySelector(".tooltip").style.display = "block";
  },
  true,
);

document.querySelector(".progress").addEventListener(
  "mouseout",
  () => {
    document.querySelector(".tooltip").style.display = "none";
  },
  true,
);
