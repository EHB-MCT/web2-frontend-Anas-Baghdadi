function logout() {
    fetch('http://localhost:3000/logout', {
      method: 'POST',
    })
    .then(response => {
      if (response.ok) {
        console.log('Logout successful');
        // Store the logout indicator in localStorage
        localStorage.setItem('isLoggedOut', 'true');
        // Redirect the user to the login page
        window.location.href = "login.html";
      } else {
        console.log('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error during logout:', error);
    });
}

// Get the logout button by its ID
const logoutButton = document.getElementById('logoutButton');


logoutButton.addEventListener('click', logout);
