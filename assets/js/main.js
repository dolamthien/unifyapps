/* ===== UnifyApps — main.js ===== */
(function () {
  "use strict";

  const apps = Array.isArray(window.UNIFY_APPS) ? window.UNIFY_APPS : [];
  const $ = (s) => document.querySelector(s);
  const grid = $("#grid"), chips = $("#chips"), search = $("#search"), empty = $("#empty");
  const ALL = "Tất cả";
  const STATUS = { live: "Hoạt động", beta: "Beta", soon: "Sắp ra mắt" };
  let active = ALL;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();

  // Nhóm
  const cats = [...new Set(apps.map((a) => a.category || "Khác"))];
  $("#statApps").textContent = apps.length;
  $("#statCats").textContent = cats.length;

  function renderChips() {
    const list = [ALL, ...cats];
    chips.innerHTML = list.map((c) => {
      const n = c === ALL ? apps.length : apps.filter((a) => (a.category || "Khác") === c).length;
      return `<button class="chip" role="tab" aria-selected="${c === active}" data-cat="${esc(c)}">${esc(c)}<small>${n}</small></button>`;
    }).join("");
  }

  function card(a) {
    const status = STATUS[a.status] ? a.status : "live";
    const soon = status === "soon" || !a.url || a.url === "#";
    const external = /^https?:\/\//i.test(a.url || "");
    const tag = soon ? "div" : "a";
    const attrs = soon ? "" : `href="${esc(a.url)}"${external ? ' target="_blank" rel="noopener"' : ""}`;
    return `<${tag} class="card${soon ? " is-soon" : ""}" ${attrs}>
      <div class="card__top">
        <div class="card__icon" aria-hidden="true">${esc(a.icon || "📦")}</div>
        <span class="badge badge--${status}">${STATUS[status]}</span>
      </div>
      <h3>${esc(a.name)}</h3>
      <p>${esc(a.description)}</p>
      <div class="card__meta"><span>${esc(a.category || "Khác")}</span>${soon ? "" : `<span class="card__open">Mở ${external ? "↗" : "→"}</span>`}</div>
    </${tag}>`;
  }

  function render() {
    const q = norm(search.value.trim());
    const list = apps.filter((a) =>
      (active === ALL || (a.category || "Khác") === active) &&
      (!q || norm(`${a.name} ${a.description} ${a.category}`).includes(q)));
    grid.innerHTML = list.map(card).join("");
    empty.hidden = list.length > 0;
  }

  chips.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    active = b.dataset.cat;
    renderChips(); render();
  });
  search.addEventListener("input", render);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); search.focus(); }
    if (e.key === "Escape" && document.activeElement === search) { search.value = ""; render(); search.blur(); }
  });

  // Theme
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const isDark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = isDark ? "light" : "dark";
    try { localStorage.setItem("ua-theme", root.dataset.theme); } catch (e) {}
  });

  $("#year").textContent = new Date().getFullYear();
  renderChips(); render();
})();
