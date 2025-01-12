// admin-main.js

document.addEventListener('DOMContentLoaded', () => {
    // Handle Edit, Cancel, and Approve actions in the bookings section
    const editButtons = document.querySelectorAll('button:contains("Edit")');
    const cancelButtons = document.querySelectorAll('button:contains("Cancel")');
    const approveButtons = document.querySelectorAll('button:contains("Approve")');
    
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert('You are editing the booking!');
            // Further actions can be added to show an edit form or redirect
        });
    });
    
    cancelButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (confirm('Are you sure you want to cancel this booking?')) {
                // Logic to cancel the booking (e.g., removing row, updating database)
                e.target.closest('tr').remove();
            }
        });
    });
    
    approveButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert('Booking approved!');
            // Logic to approve booking (e.g., update status)
            const row = e.target.closest('tr');
            row.querySelector('td:nth-child(6)').textContent = 'Confirmed'; // Update status to Confirmed
        });
    });

    // Handle Add New Room button
    const addRoomButton = document.querySelector('.btn');
    if (addRoomButton) {
        addRoomButton.addEventListener('click', () => {
            const newRoomName = prompt('Enter new room name:');
            if (newRoomName) {
                const newRoomPrice = prompt('Enter room price per night:');
                if (newRoomPrice) {
                    const roomList = document.querySelector('.room__list');
                    const newRoomItem = document.createElement('div');
                    newRoomItem.classList.add('room__item');
                    newRoomItem.innerHTML = `
                        <h4>${newRoomName}</h4>
                        <p>Rp${newRoomPrice} / night</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    `;
                    roomList.appendChild(newRoomItem);
                }
            }
        });
    }

    // Handle Add New Menu Item button
    const addMenuItemButton = document.querySelectorAll('.btn')[1];
    if (addMenuItemButton) {
        addMenuItemButton.addEventListener('click', () => {
            const itemName = prompt('Enter new menu item name:');
            if (itemName) {
                const itemDescription = prompt('Enter menu item description:');
                if (itemDescription) {
                    const menuList = document.querySelector('.menu__list');
                    const newMenuItem = document.createElement('div');
                    newMenuItem.classList.add('menu__item');
                    newMenuItem.innerHTML = `
                        <h4>${itemName}</h4>
                        <p>${itemDescription}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    `;
                    menuList.appendChild(newMenuItem);
                }
            }
        });
    }

    // Handle Add New News Article button
    const addNewsArticleButton = document.querySelectorAll('.btn')[2];
    if (addNewsArticleButton) {
        addNewsArticleButton.addEventListener('click', () => {
            const articleTitle = prompt('Enter news article title:');
            if (articleTitle) {
                const articleDate = prompt('Enter article date:');
                if (articleDate) {
                    const newsList = document.querySelector('.news__list');
                    const newNewsItem = document.createElement('div');
                    newNewsItem.classList.add('news__item');
                    newNewsItem.innerHTML = `
                        <h4>${articleTitle}</h4>
                        <p>${articleDate}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    `;
                    newsList.appendChild(newNewsItem);
                }
            }
        });
    }

    // Handle Settings Update
    const updateSettingsButton = document.querySelector('button.btn');
    if (updateSettingsButton) {
        updateSettingsButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default form submission
            const websiteName = document.getElementById('website-name').value;
            const contactEmail = document.getElementById('contact-email').value;
            const themeColor = document.getElementById('theme-color').value;

            // Simulate saving settings (e.g., update the backend or show confirmation)
            alert(`Settings updated: \nWebsite Name: ${websiteName}\nContact Email: ${contactEmail}\nTheme Color: ${themeColor}`);
        });
    }
});
