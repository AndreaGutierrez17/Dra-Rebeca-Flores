
(() => {
  // AOS animations
  if (window.AOS) {
    AOS.init({
      once: true,
      offset: 90,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Gallery modal
  const galleryModalImg = document.getElementById("galleryModalImg");
  document.querySelectorAll(".gallery-tile").forEach((tile) => {
    tile.addEventListener("click", (e) => {
      const src = tile.getAttribute("data-img");
      if (galleryModalImg && src) galleryModalImg.src = src;
    });
  });

  // WhatsApp questionnaire -> wa.me link
  const PHONE = "524423382727"; // +52 442 338 2727 (sin +)
  const form = document.getElementById("whatsappForm");
  const waFloat = document.getElementById("waFloat");

  const buildMessage = (data) => {
    const lines = [
      "Hola Dra. Rebeca, quiero agendar una valoración / cita.",
      "",
      `Nombre: ${data.name}`,
      `Servicio: ${data.service}`,
      `Preferencia de día: ${data.dayPref}`,
      `Preferencia de horario: ${data.timePref}`,
    ];

    if (data.notes && data.notes.trim().length) {
      lines.push(`Comentarios: ${data.notes.trim()}`);
    }

    lines.push("", "¿Me confirma disponibilidad y siguientes pasos? Gracias.");
    return lines.join("\n");
  };

  const openWhatsApp = (msg) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener");
  };

  // Floating WhatsApp (mensaje corto)
  if (waFloat) {
    waFloat.addEventListener("click", (e) => {
      e.preventDefault();
      const msg = "Hola Dra. Rebeca, deseo información y agendar una cita. ¿Me apoya por favor?";
      openWhatsApp(msg);
    });
  }

  // Form submit
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fd = new FormData(form);
      const data = {
        name: (fd.get("name") || "").toString(),
        service: (fd.get("service") || "").toString(),
        dayPref: (fd.get("dayPref") || "").toString(),
        timePref: (fd.get("timePref") || "").toString(),
        notes: (fd.get("notes") || "").toString(),
      };

      // minimal validation
      if (!data.name || !data.service || !data.dayPref || !data.timePref) return;

      openWhatsApp(buildMessage(data));
    });
  }
})();
