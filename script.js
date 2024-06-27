const febHolidays = [
    "Hello,",
    "NILANJAN❤️",
    "bas kuch bolna tha",
    "I LOVE UHHH 😗❤",
    "hehehhh",
    "will",
    "youhhh",
    "be🥰",
    "mine?,",
    "and thank uhh",
    " fr whatever you did😍",
    "and dammm🥰",
    "I'm so grateful I met you❤️",
    "umm hmm kuch toh baat hai🥺",
    "koina 🥰",
    "now u r mine 😗",
    "Abb jhelooo mujhe",
    "hui hui pui pui❤️",
    "You're the best kid!!",
    "time flies too fast",
    "and its been a yr meeting uhh",
    "hehehh which was quiet masttt",
    "and wish ki it lastss",
    "hehehhh❤️",
    "This for you,",
    "l'amour",
    "ek mo l'amour",
    "nowwwwwwwwwwwww uuuhhh mineeeeeeeeee 🤣❤️",
    "uhh preetyyy bbyyyy",
    "muahhhhhhhhhhhhhhhh😗",
    "I Love You So much❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
        idx + 1
      }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
