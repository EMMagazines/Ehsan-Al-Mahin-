document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('search-bar');
    const categories = document.querySelectorAll('.category');
    const cards = document.querySelectorAll('.magazine-card');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        
        categories.forEach(category => {
            const categoryName = category.dataset.category;
            const categoryCards = category.querySelectorAll('.magazine-card');
            let hasVisibleCard = false;
            
            categoryCards.forEach(card => {
                const title = card.dataset.title.toLowerCase();
                if (title.includes(query) || categoryName.includes(query)) {
                    card.style.display = 'block';
                    hasVisibleCard = true;
                } else {
                    card.style.display = 'none';
                }
            });
            
            category.style.display = hasVisibleCard ? 'block' : 'none';
        });
    });
});

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

