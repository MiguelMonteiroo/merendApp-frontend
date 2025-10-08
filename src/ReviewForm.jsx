import React, { useState } from "react";

export default function ReviewForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: "",
    grade: 5,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;
    onSubmit(formData);
    setFormData({ name: "", role: "", text: "", grade: 5 });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-white p-4 shadow rounded-4"
      style={{ maxWidth: "600px" }}
    >
      <div className="mb-3">
        <label className="form-label">Nome</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Cargo ou relação com o app</label>
        <input
          type="text"
          className="form-control"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Depoimento</label>
        <textarea
          className="form-control"
          name="text"
          rows="3"
          value={formData.text}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label d-block">Avaliação</label>
        <div className="d-flex justify-content-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => setFormData({ ...formData, grade: star })}
              style={{
                cursor: "pointer",
                fontSize: "1.8rem",
                color: star <= formData.grade ? "#ffc107" : "#e4e5e9",
              }}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <button type="submit" className="btn btn-primary form-button">
        Enviar Depoimento
      </button>
    </form>
  );
}
