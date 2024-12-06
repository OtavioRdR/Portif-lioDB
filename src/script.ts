const toggleTheme = (): void => {
    const body = document.body;
    body.classList.toggle('dark-mode');
};

document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle') as HTMLButtonElement;
    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
});
