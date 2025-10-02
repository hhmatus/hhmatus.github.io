const projects = [
  {
    title: "Clasificación de notas clínicas para detección temprana",
    description: "Sistema de NLP para clasificar notas clínicas y detectar gravedad de afecciones, con enfoque ético y mitigación de sesgos.",
    image: "img/proyecto1.png",
    link: "proyecto1/index.html"
  },
  {
    title: "Sistema Inteligente de Scoring Crediticio",
    description: "Modelo de deep learning explicable para predecir probabilidad de impago en clientes bancarios.",
    image: "img/proyecto2.jpg",
    link: "proyecto2/index.html"
  },
  {
    title: "Conversión SAP ECC a SAP S4 HANA RISE",
    description: "Proyecto de migración y conversión liderando un equipo multidisciplinario en la Universidad Diego Portales.",
    image: "img/proyecto3.jpg",
    link: "proyecto3/index.html"
  }
];

const grid = document.getElementById("project-grid");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.title}">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <a href="${p.link}">Ver proyecto</a>
  `;
  grid.appendChild(card);
});
