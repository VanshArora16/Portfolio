document.getElementById('see-more-btn').addEventListener('click', function() {
    const hiddenContent = document.querySelector('.hidden-content');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block';
        this.textContent = 'See Less';
    } else {
        hiddenContent.style.display = 'none';
        this.textContent = 'See More';
    }
});
