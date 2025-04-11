document.getElementById('report-incident-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
    alert('Incident Report Submitted Successfully!');
    // Additional code for form processing (e.g., API calls) can be added here
});

  document.getElementById("report-incident-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("incident-title").value;
    const type = document.getElementById("incident-type").value;
    const location = document.getElementById("incident-location").value;
    const severity = document.getElementById("incident-severity").value;
    const datetime = document.getElementById("incident-datetime").value;

    addIncidentReport(title, type, location, severity, datetime, "Pending");

    this.reset();
  });

  function addIncidentReport(title, type, location, severity, datetime, status) {
    const tableBody = document.getElementById("incident-table-body");
    const rowCount = tableBody.rows.length;
    const row = tableBody.insertRow();

    row.innerHTML = `
      <td>${rowCount + 1}</td>
      <td>${title}</td>
      <td>${type}</td>
      <td>${location}</td>
      <td>${severity}</td>
      <td>${datetime}</td>
      <td>${status}</td>
    `;
  }

  // Add two sample entries
  addIncidentReport("Engine Failure", "Mechanical", "Runway 4", "High", "2024-11-18T10:30", "Reviewed");
  addIncidentReport("Fuel Leak", "Technical", "Hangar B", "Medium", "2024-11-17T14:00", "In Progress");

