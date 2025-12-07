document.getElementById("appointmentForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = new FormData(e.target);

  const status = document.getElementById("status");
  status.textContent = "Submitting...";

  const response = await fetch("YOUR_GOOGLE_SCRIPT_URL_HERE", {
    method: "POST",
    body: form,
  });

  const result = await response.text();
  status.textContent = result;
});
