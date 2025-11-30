// Simple client-side validation for the booking form

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    let valid = true;

    // Helper
    const setError = (id, message) => {
      const el = document.getElementById(id);
      if (el) el.textContent = message || "";
      if (message) valid = false;
    };

    // Clear old errors
    [
      "error-name",
      "error-email",
      "error-phone",
      "error-date",
      "error-time",
      "error-patient",
      "error-service",
      "error-agree"
    ].forEach(id => setError(id, ""));

    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const time = form.time.value;
    const patientType = form.patientType.value;
    const service = form.service.value;
    const agree = form.agree.checked;

    if (name.length < 2) {
      setError("error-name", "Please enter your full name.");
    }

    // Very simple email check
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("error-email", "Please enter a valid email address.");
    }

    if (!phone || phone.replace(/\D/g, "").length < 8) {
      setError("error-phone", "Please enter a valid phone number.");
    }

    if (!date) {
      setError("error-date", "Please choose a preferred date.");
    }

    if (!time) {
      setError("error-time", "Please choose a preferred time.");
    }

    if (!patientType) {
      setError("error-patient", "Please select a patient type.");
    }

    if (!service) {
      setError("error-service", "Please select the service you require.");
    }

    if (!agree) {
      setError("error-agree", "You must confirm that you understand this is a booking request.");
    }

    if (!valid) {
      event.preventDefault();
      return;
    }

    // If everything is valid, show a simple confirmation.
    event.preventDefault();
    alert("Thank you for your booking request. We will contact you soon to confirm your appointment.");
    form.reset();
  });
});
