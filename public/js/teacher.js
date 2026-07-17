document.addEventListener('DOMContentLoaded', () => {
    const grids = document.querySelectorAll('.teachers-grid');
    const modal = document.getElementById('teachersModal');
    const modalTitle = document.getElementById('modalCategoryTitle');
    const modalGrid = document.getElementById('modalTeachersGrid');
    const closeBtn = document.getElementById('modalCloseBtn');
    const limit = 3;

    grids.forEach(grid => {
        // Exclude the modal's own grid container from calculation
        if (grid.id === 'modalTeachersGrid') return;

        const cards = grid.querySelectorAll('.teacher-card');

        // Find the title element (the heading before this grid container)
        let headingEl = grid.previousElementSibling;
        while (headingEl && !headingEl.matches('h3')) {
            headingEl = headingEl.previousElementSibling;
        }
        const categoryName = headingEl ? headingEl.textContent : 'Teachers';

        if (cards.length > limit) {
            // Hide cards beyond the limit
            for (let i = limit; i < cards.length; i++) {
                cards[i].classList.add('hide-card');
            }

            // Create the "See More" button container
            const container = document.createElement('div');
            container.className = 'see-more-container';

            const button = document.createElement('button');
            button.className = 'see-more-btn';
            button.innerHTML = `See More <i class="fa-solid fa-chevron-down"></i>`;

            button.addEventListener('click', () => {
                // Clear previous modal contents
                modalGrid.innerHTML = '';
                modalTitle.textContent = `${categoryName} Faculty`;

                // Clone all cards from this grid, remove hide-card class, and append to modal
                cards.forEach(card => {
                    const clone = card.cloneNode(true);
                    clone.classList.remove('hide-card');
                    modalGrid.appendChild(clone);
                });

                // Open the modal
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // prevent background scroll
            });

            container.appendChild(button);
            grid.after(container);
        }
    });

    // Close modal functions
    const closeModal = () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });
});