document.addEventListener("DOMContentLoaded", () => {
  // Simulate fetching data from an API endpoint
  const fetchData = async () => {
    // Replace with actual API calls
    return {
      personalInfo: {
        name: "John Doe",
        aviationId: "A123456",
        email: "johndoe@example.com",
        role: "Pilot",
        aircraft: "Cessna 172",
      },
      trainingStatus: [
        "Safety Training - Completed",
        "Emergency Procedures - In Progress",
        "Advanced Navigation - Pending",
      ],
      incidentHistory: [
        { id: 1, date: "2024-01-15", description: "Engine Failure Reported", status: "Resolved" },
        { id: 2, date: "2024-02-12", description: "Navigation Malfunction", status: "Pending" },
      ],
    };
  };

  // Populate the UI
  fetchData().then((data) => {
    // Personal Info
    document.getElementById("user-name").textContent = data.personalInfo.name;
    document.getElementById("user-id").textContent = data.personalInfo.aviationId;
    document.getElementById("user-email").textContent = data.personalInfo.email;
    document.getElementById("user-role").textContent = data.personalInfo.role;
    document.getElementById("user-aircraft").textContent = data.personalInfo.aircraft;

    // Training Status
    const trainingList = document.getElementById("training-list");
    trainingList.innerHTML = data.trainingStatus.map((item) => `<li>${item}</li>`).join("");

    // Incident History
    const incidentHistory = document.getElementById("incident-history");
    incidentHistory.innerHTML = data.incidentHistory
      .map(
        (incident) =>
          `<tr>
            <td>${incident.id}</td>
            <td>${incident.date}</td>
            <td>${incident.description}</td>
            <td>${incident.status}</td>
          </tr>`
      )
      .join("");
  });
});
