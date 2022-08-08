// Pointer to logout button
$("#logout-btn").click(logout);

const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
