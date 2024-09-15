document.getElementById('see-more-btn').addEventListener('click', function() {
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        this.innerHTML = '<i class="fa-solid fa-angle-up"></i> See Less';
    } else {
        hiddenContent.style.display = 'none';
        this.innerHTML = ' <i class="fa-solid fa-angle-down"></i> See More';
    }
});
