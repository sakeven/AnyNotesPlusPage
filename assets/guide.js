const guideSidebar = document.querySelector('.guideSidebar');
const guideScrollKey = `anynotes-guide-sidebar:${document.documentElement.lang}`;

guideSidebar.scrollTop = Number(sessionStorage.getItem(guideScrollKey)) || 0;
guideSidebar.addEventListener('scroll', () => {
  sessionStorage.setItem(guideScrollKey, String(guideSidebar.scrollTop));
}, { passive: true });
