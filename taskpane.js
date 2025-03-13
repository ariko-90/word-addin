document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formatBtn").addEventListener("click", function () {
        let selectedStyle = document.getElementById("style").value;
        formatCitations(selectedStyle);
    });
});