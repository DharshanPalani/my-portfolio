const projects = [
  {
    name: "Socket Based Chat Application",
    stack: "NODE / REACT",
    description:
      "Realtime communication platform with custom group creation, WebSocket messaging, emoji support and username-based identity sessions.",
  },
  {
    name: "Event Registration Management System",
    stack: "FULL STACK",
    description:
      "College intra-event management platform with Google authentication, persistent participant sessions and scalable registration workflows.",
  },
];

const container = document.getElementById("projects");

if (container) {
  container.innerHTML = projects
    .map(
      (p) => `
      <div class="project-item">
        <h3 class="project-name">${p.name}</h3>
        <span class="project-stack">${p.stack}</span>
        <p class="project-description">${p.description}</p>
      </div>
    `,
    )
    .join("");
}
