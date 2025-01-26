const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document
  .getElementById("gameForm")
  .addEventListener("submit", function (event) {
    const playerCount = parseInt(
      document.getElementById("playerCount").value,
      10
    );
    const undercoverCount = parseInt(
      document.getElementById("undercoverCount").value,
      10
    );
    const mrWhiteCount = parseInt(
      document.getElementById("mrWhiteCount").value,
      10
    );

    if (playerCount <= 0) {
      alert("Number of players must be greater than 0.");
      event.preventDefault();
      return;
    }

    if (playerCount < undercoverCount + mrWhiteCount) {
      alert("Number of special roles cannot exceed the number of players.");
      event.preventDefault();
      return;
    }
  });
