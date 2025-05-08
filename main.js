function filterBooks() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#bookTable tr");
    
    rows.forEach(row => {
    const rowText = row.innerText.toLowerCase();
    if (rowText.includes(input)) {
    row.style.display = "";
    } else {
    row.style.display = "none";
    }
    });
    }
