// const btn = document.querySelector(".btn-toggle");
// btn.addEventListener("click", function (e) {
//   document.body.classList.toggle("dark-theme");
// });


// document.getElementById('themeToggle').addEventListener('click', function() {
//     const currentTheme = document.body.className;
//     if (currentTheme === 'light-theme') {
//         document.body.className = 'dark-theme';
//     } else {
//         document.body.className = 'light-theme';
//     }
// });


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('light-theme');
      document.getElementById('slider').checked = true;
    }
})();