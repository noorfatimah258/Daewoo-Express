import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    destination: "Lahore",
    vipMeal: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Daewoo Express Ticket Booker</h2>

      {/* FORM */}
      <div className="card p-4 shadow-sm mb-4">
        {/* NAME */}
        <div className="mb-3">
          <label className="form-label">Passenger Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        {/* DESTINATION */}
        <div className="mb-3">
          <label className="form-label">Destination</label>
          <select
            className="form-select"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
          </select>
        </div>

        {/* VIP MEAL */}
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            name="vipMeal"
            checked={formData.vipMeal}
            onChange={handleChange}
            id="vipMeal"
          />
          <label className="form-check-label" htmlFor="vipMeal">
            Need VIP Meal?
          </label>
        </div>

        {/* BUTTON */}
        <button
          className="btn btn-primary w-100"
          disabled={!formData.name.trim()}
        >
          Confirm Booking
        </button>
      </div>

      {/* LIVE TICKET */}
      <div className="card shadow-lg border-dark">
        <div className="card-header text-center bg-dark text-white">
          🎫 Daewoo Express Ticket
        </div>

        <div className="card-body">
          <p>
            <strong>Passenger:</strong> {formData.name || "N/A"}
          </p>
          <p>
            <strong>Destination:</strong> {formData.destination}
          </p>
          <p>
            <strong>VIP Meal:</strong>{" "}
            {formData.vipMeal ? "Included 🍱" : "Not Included"}
          </p>

          <hr />

          <p className="text-center text-muted mb-0">
            Safe Journey ✨
          </p>
        </div>
      </div>
    </div>
  );
}