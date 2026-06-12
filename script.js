const certContainer = document.getElementById("certs-container");
const projectContainer = document.getElementById("projects-container");

/* ---------------- CERTS ---------------- */
certs.forEach((cert, i) => {
  const div = document.createElement("div");
  div.className = "cert glass";

  div.innerHTML = `
    <div class="cert-header">
      <strong>${cert.title}</strong>
      <span>${cert.provider}</span>
    </div>
    <div class="cert-details">
      <p>${cert.details}</p>
    </div>
  `;

  div.querySelector(".cert-header").onclick = () => {
    div.classList.toggle("open");
  };

  certContainer.appendChild(div);
});

/* ---------------- GITHUB PROJECTS ---------------- */
/* Replace "YOUR_USERNAME" */
const username = "YOUR_GITHUB_USERNAME";

fetch(`https://api.github.com/users/${username}/repos`)
  .then(res => res.json())
  .then(repos => {
    repos.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "card glass";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description"}</p>
        <a href="${repo.html_url}" target="_blank">View Repo</a>
      `;

      projectContainer.appendChild(card);
    });
  });

/* ---------------- SCROLL ANIMATION ---------------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => {
  observer.observe(el);
});
