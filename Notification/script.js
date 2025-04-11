// script.js
const notificationsList = document.getElementById('notifications-list');

// Mock data for demonstration
const notifications = [
    {
        id: 1,
        type: 'incident',
        content: 'New incident reported: Engine failure during takeoff.',
        time: '5 mins ago',
    },
    {
        id: 2,
        type: 'training',
        content: 'Reminder: Complete your Aircraft Safety Training by tomorrow.',
        time: '2 hours ago',
    },
    {
        id: 3,
        type: 'certification',
        content: 'Your certification is expiring in 3 days. Renew now!',
        time: '1 day ago',
    },
];

// Function to fetch notifications from the backend (mock implementation here)
async function fetchNotifications() {
    // Replace with ASP.NET Core backend API call
    // const response = await fetch('/api/notifications');
    // const data = await response.json();
    const data = notifications; // Mock data
    return data;
}

// Render notifications on the page
function renderNotifications(notifications) {
    notificationsList.innerHTML = ''; // Clear existing notifications
    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.classList.add(getNotificationClass(notification.type));
        li.innerHTML = `
            <div class="notification-content">${notification.content}</div>
            <span class="notification-time">${notification.time}</span>
        `;
        notificationsList.appendChild(li);
    });
}

// Determine the class for each notification type
function getNotificationClass(type) {
    switch (type) {
        case 'incident':
            return 'new-notification';
        case 'training':
            return 'warning-notification';
        case 'certification':
            return 'expiry-notification';
        default:
            return '';
    }
}

// Initial load
(async function () {
    const notifications = await fetchNotifications();
    renderNotifications(notifications);
})();
