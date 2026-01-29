// Small enhancements only (no framework)
(() => {
  // Set current year in footer
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Warn if form URL is not replaced
  const placeholder = "YOUR_FORM_URL";
  const links = document.querySelectorAll('a[href="YOUR_FORM_URL"]');
  if (links.length) {
    links.forEach(a => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        alert("신청 링크가 아직 설정되지 않았습니다.\nindex.html에서 YOUR_FORM_URL을 실제 신청 폼 링크로 바꿔주세요.");
      });
    });
  }
})();
