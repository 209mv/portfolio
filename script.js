const desktop = document.getElementById("desktop");

/* BOOT */
setTimeout(() => {
  document.getElementById("boot").style.display = "none";
  desktop.classList.remove("hidden");

  document.getElementById("startupSound").play();
}, 3000);

/* SOUND */
function click() {
  document.getElementById("clickSound").play();
}

/* WINDOWS */
function openWindow(id) {
  click();
  document.getElementById(id).classList.remove("hidden");
}

function closeWindow(id) {
  click();
  document.getElementById(id).classList.add("hidden");
}

/* CERTS */
const certList = document.getElementById("cert-list");

certs.forEach(c => {
  certList.innerHTML += `<p><b>${c.title}</b> - ${c.provider}</p>`;
});

/* CRT TOGGLE */
function toggleCRT() {
  document.body.classList.toggle("crt");
}

/* DRAGGABLE WINDOWS */
document.querySelectorAll(".draggable").forEach(win => {
  let isDown = false, offsetX, offsetY;

  const bar = win.querySelector(".titlebar");

  bar.addEventListener("mousedown", e => {
    isDown = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (!isDown) return;
    win.style.left = (e.clientX - offsetX) + "px";
    win.style.top = (e.clientY - offsetY) + "px";
  });

  document.addEventListener("mouseup", () => isDown = false);
});
