function enter() {
  document.getElementById("boot-screen").style.display = "none";
  document.getElementById("desktop").classList.remove("hidden");
}

function openWindow(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeWindow(id) {
  document.getElementById(id).classList.add("hidden");
}

/* CERTS + BADGES */
const certs = [
  { title: "Cisco Cybersecurity", provider: "Cisco" },
  { title: "Google ML Crash Course", provider: "Google" }
];

const certList = document.getElementById("cert-list");
certs.forEach(c => {
  certList.innerHTML += `<p><b>${c.title}</b> - ${c.provider}</p>`;
});

const badges = [
  { title: "Cybersecurity Basics", issuer: "Cisco" },
  { title: "ML Foundations", issuer: "Google" }
];

const badgeList = document.getElementById("badge-list");
badges.forEach(b => {
  badgeList.innerHTML += `<p>🏅 ${b.title} - ${b.issuer}</p>`;
});
