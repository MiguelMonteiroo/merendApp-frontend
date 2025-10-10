import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "bootstrap";
import ReviewForm from "./ReviewForm";
import "./styles/index.css";


export default function Testimonials() {
  const carouselRef = useRef(null);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Ana Souza",
      role: "Gestora Escolar",
      text: "O MerendApp facilitou muito a gestão da merenda na nossa escola. Agora conseguimos planejar melhor as compras e evitar desperdícios.",
      grade: 5,
    },
    {
      name: "Carlos Lima",
      role: "Distribuidor de Alimentos",
      text: "Com o MerendApp, encontrei novas escolas interessadas nos meus produtos. A plataforma é simples e me ajuda a expandir minha rede de clientes.",
      grade: 4,
    },
    {
      name: "Fernanda Oliveira",
      role: "Secretária de Educação Municipal",
      text: "A transparência e a praticidade do MerendApp nos permitem acompanhar todo o fluxo de distribuição de alimentos. É uma solução inovadora para o setor público.",
      grade: 5,
    },
  ]);

  useEffect(() => {
    if (!carouselRef.current) return;
    const instance = Carousel.getOrCreateInstance(carouselRef.current, {
      interval: 4000,
      ride: "carousel",
      pause: false,
      wrap: true,
      keyboard: false,
      touch: true,
    });

    return () => instance.dispose();
  }, [testimonials]);

  const handleNewReview = (review) => {
    setTestimonials((prev) => [...prev, review]);
  };

  return (
    <section className="testimonials-section py-5 bg-light" id="testimonials">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Depoimentos</h2>
          <p className="text-muted">
            Veja o que nossos usuários dizem sobre o MerendApp
          </p>
        </div>

        <div
          id="testimonialsCarousel"
          className="carousel slide"
          ref={carouselRef}
        >
          <div className="carousel-inner">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="d-flex justify-content-center">
                  <div className="card shadow-sm border-0 rounded-4 w-75">
                    <div className="card-body text-center">
                      <p className="card-text fs-5 fst-italic">“{t.text}”</p>
                      <div className="text-warning mb-2">
                        {"★".repeat(t.grade)}
                        {"☆".repeat(5 - t.grade)}
                      </div>
                      <h6 className="mt-2 mb-0 fw-bold">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h4 className="fw-bold text-center mb-4">Envie seu depoimento</h4>
          <ReviewForm onSubmit={handleNewReview} />
        </div>
      </div>
    </section>
  );
}
