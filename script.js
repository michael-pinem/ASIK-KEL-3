// Navigasi halaman website
function showPage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('nav button').forEach(button => {
        button.classList.remove('active');

        if (button.dataset.page === pageId) {
            button.classList.add('active');
        }
    });

    window.scrollTo(0, 0);
}

// Tombol navigasi
document.querySelectorAll('nav button').forEach(button => {
    button.addEventListener('click', function() {
        showPage(this.dataset.page);
    });
});


      