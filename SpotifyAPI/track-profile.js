// Formato MX para seguidores
function formatNumber(num) {
    try { return new Intl.NumberFormat("es-MX").format(num ?? 0); }
    catch { return String(num ?? 0); }
}

// Color según popularidad
function popularityColor(p) {
    if (p >= 75) return "#16a34a";    // verde
    if (p >= 50) return "#f59e0b";    // amarillo
    return "#dc2626";                 // rojo
}

// Construye una tarjeta
function addArtistResponse(container, artist) {
    const imgUrl = artist.images?.[0]?.url || "https://placehold.co/400x400?text=No+Image";
    const pop = Number(artist.popularity ?? 0);
    const popColor = popularityColor(pop);

    // envoltura
    const card = document.createElement("article");
    card.className = "shadow-lg border-0 rounded-4 mb-4";
    card.style.cssText = `
    background: linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%);
    padding: 1px;               /* borde “neón” */
  `;

    // capa interior
    const inner = document.createElement("div");
    inner.className = "rounded-4";
    inner.style.cssText = `
    background: rgba(255,255,255,.9);
    backdrop-filter: blur(6px);
  `;

    // grid
    const row = document.createElement("div");
    row.className = "row g-0 align-items-stretch";

    // columna imagen
    const imgCol = document.createElement("div");
    imgCol.className = "col-12 col-md-4";
    imgCol.style.cssText = "overflow:hidden;";

    const imgWrap = document.createElement("div");
    imgWrap.style.cssText = `
    height: 100%;
    display:flex; align-items:center; justify-content:center;
    background: linear-gradient(135deg, #111827, #374151);
    border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;
  `;

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = `Foto de ${artist.name}`;
    img.loading = "lazy";
    img.style.cssText = `
    width: 100%; height: 100%; object-fit: cover;
    mix-blend-mode: normal; opacity: .95;
  `;
    imgWrap.appendChild(img);
    imgCol.appendChild(imgWrap);

    // columna contenido
    const bodyCol = document.createElement("div");
    bodyCol.className = "col-12 col-md-8 p-4";

    // encabezado
    const title = document.createElement("h2");
    title.textContent = artist.name;
    title.className = "h3 mb-2";
    title.style.cssText = "font-weight:800; color:#111827;";

    // seguidores
    const followers = document.createElement("p");
    followers.className = "mb-1";
    followers.innerHTML = `<span style="font-weight:700; color:#111827;">Seguidores:</span> ${formatNumber(artist.followers?.total)}`;

    // popularidad con barra
    const popLabel = document.createElement("p");
    popLabel.className = "mb-2";
    popLabel.innerHTML = `<span style="font-weight:700; color:#111827;">Popularidad:</span> ${pop}/100`;

    const barWrap = document.createElement("div");
    barWrap.style.cssText = `
    width:100%; height:10px; background:#e5e7eb; border-radius:999px; overflow:hidden; margin-bottom: .5rem;
  `;
    const bar = document.createElement("div");
    bar.style.cssText = `
    width:${pop}%; height:100%; background:${popColor};
    transition: width .3s ease; border-radius:999px;
  `;
    barWrap.appendChild(bar);

    // géneros
    const genres = document.createElement("div");
    genres.className = "d-flex flex-wrap gap-2 mb-3";
    const titleG = document.createElement("span");
    titleG.textContent = "Géneros:";
    titleG.style.cssText = "font-weight:700; color:#111827;";
    genres.appendChild(titleG);

    (artist.genres ?? []).slice(0, 6).forEach(g => {
        const badge = document.createElement("span");
        badge.textContent = g;
        badge.className = "badge";
        badge.style.cssText = `
      background:#111827; color:white; padding:.5rem .6rem; border-radius:999px;
      letter-spacing:.2px;
    `;
        genres.appendChild(badge);
    });
    if (!artist.genres?.length) {
        const none = document.createElement("span");
        none.textContent = "Sin información";
        none.className = "text-muted";
        genres.appendChild(none);
    }

    // botón
    const link = document.createElement("a");
    link.href = artist.external_urls?.spotify ?? "#";
    link.target = "_blank";
    link.textContent = "Abrir en Spotify";
    link.className = "btn btn-lg";
    link.style.cssText = `
    background:#111827; color:#fff; border:none;
    border-radius: .75rem; padding:.6rem 1rem; font-weight:700;
  `;

    // ensamblado
    bodyCol.append(title, followers, popLabel, barWrap, genres, link);
    row.append(imgCol, bodyCol);
    inner.appendChild(row);
    card.appendChild(inner);
    container.appendChild(card);
}

// Evento principal
document.getElementById("fetch-btn").addEventListener("click", async () => {
    const token = document.getElementById("token").value.trim();
    const artistId = document.getElementById("track-id").value.trim();
    const container = document.getElementById("track-info");

    container.innerHTML = "";
    const loading = document.createElement("p");
    loading.textContent = "Cargando...";
    loading.className = "text-muted";
    container.appendChild(loading);

    try {
        const resp = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
        });

        if (resp.status === 401) throw new Error("Token inválido o expirado.");
        if (!resp.ok) throw new Error(`Error ${resp.status}: ${resp.statusText}`);

        const data = await resp.json();
        container.innerHTML = "";
        addArtistResponse(container, data);
    } catch (err) {
        container.innerHTML = "";
        const p = document.createElement("p");
        p.textContent = err.message;
        p.style.color = "red";
        container.appendChild(p);
    }
});
