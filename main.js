window.addEventListener("DOMContentLoaded", () => {
  const opening = document.getElementById("opening");
  const menuButton = document.querySelector(".menu-button");
  const drawer = document.querySelector(".drawer");
  const drawerClose = document.querySelector(".drawer__close");
  const drawerBackdrop = document.querySelector(".drawer-backdrop");
  const drawerLinks = document.querySelectorAll(".drawer a");
  const viewMore = document.getElementById("viewMore");
  const viewMoreButton = document.getElementById("viewMoreButton");
  const closeMoreButton = document.getElementById("closeMoreButton");
  const monthTabs = document.querySelectorAll(".month-tabs span");
  const calendar4 = document.getElementById("calendar4");
  const calendar5 = document.getElementById("calendar5");

  setTimeout(() => {
    opening?.classList.add("is-hidden");
    setTimeout(() => opening?.remove(), 700);
  }, 2600);

  const setMenuOpen = (open) => {
    drawer?.classList.toggle("is-open", open);
    drawer?.setAttribute("aria-hidden", String(!open));
    menuButton?.setAttribute("aria-expanded", String(open));

    if (drawerBackdrop) {
      drawerBackdrop.hidden = !open;
    }
  };

  menuButton?.addEventListener("click", () => setMenuOpen(true));
  drawerClose?.addEventListener("click", () => setMenuOpen(false));
  drawerBackdrop?.addEventListener("click", () => setMenuOpen(false));
  drawerLinks.forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  viewMoreButton?.addEventListener("click", () => {
    if (!viewMore) return;

    const shouldOpen = viewMore.hidden;
    viewMore.hidden = !shouldOpen;
    viewMoreButton.setAttribute("aria-expanded", String(shouldOpen));

    if (shouldOpen) {
      viewMore.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  closeMoreButton?.addEventListener("click", () => {
    if (!viewMore) return;

    viewMore.hidden = true;
    viewMoreButton?.setAttribute("aria-expanded", "false");
    document
      .getElementById("foreign")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  monthTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      monthTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      calendar4?.classList.toggle("active", tab.dataset.month === "4");
      calendar5?.classList.toggle("active", tab.dataset.month === "5");
    });
  });
});
