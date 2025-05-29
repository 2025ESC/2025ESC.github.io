// 다크/라이트 테마 토글 스크립트
const themeToggle = document.getElementById('theme-toggle');
const setTheme = (theme) => {
    document.body.setAttribute('data-theme', theme);
    if (theme === 'light') {
        themeToggle.innerHTML = '🌙';
        themeToggle.title = '다크 모드';
        themeToggle.style.background = '#e0e0e0';
        themeToggle.style.color = '#14213d';
    } else {
        themeToggle.innerHTML = '☀️';
        themeToggle.title = '라이트 모드';
        themeToggle.style.background = '#14213d';
        themeToggle.style.color = '#5fd1f9';
    }
    localStorage.setItem('esc-theme', theme);
};

// 초기 테마 설정
const savedTheme = localStorage.getItem('esc-theme');
setTheme(savedTheme === 'light' ? 'light' : 'dark');

themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});