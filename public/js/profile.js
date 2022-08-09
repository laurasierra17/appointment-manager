// removes appt from cancel button
$('button#removeApt').on('click',async (event) => {
    var aptId = event.target.getAttribute("data-id");
    if (aptId) {
        const response = await fetch(`api/appointment/${aptId}`, {
            method: "DELETE",
        });
        if (response.ok) {
            document.location.reload('/profile');
        } else {
            alert(response.statusText);
        }
    }
});
