// script.js

document.getElementById('searchBar').addEventListener('keyup', function() {
    const searchString = this.value.toLowerCase();
    const buildingSections = document.querySelectorAll('.building-list');

    buildingSections.forEach(section => {
        let hasVisibleItems = false;
        const listItems = section.querySelectorAll('main a');

        listItems.forEach(item => {
            const buildingInfo = item.querySelector('.building-info');
            if (buildingInfo) {
                const buildingName = buildingInfo.querySelector('h2').textContent.toLowerCase();
                if (buildingName.includes(searchString)) {
                    item.style.display = ''; // Show matching building
                    hasVisibleItems = true;
                } else {
                    item.style.display = 'none'; // Hide non-matching building
                }
            } else {
                item.style.display = 'none'; // Hide empty list items
            }
        });

        // Hide the entire section if no list items are visible
        section.style.display = hasVisibleItems ? '' : 'none';
    });
});
