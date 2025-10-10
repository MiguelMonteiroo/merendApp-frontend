import "./styles/index.css";



import React, { useRef, useState, forwardRef } from "react";

const ContactForm = forwardRef((props, ref) => {
  const formRef = useRef(null);
  const [validated, setValidated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = formRef.current;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const data = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      telefone: form.telefone.value.trim(),
      empresa: form.empresa.value.trim(),
      tipo: form.tipo.value,
      mensagem: form.mensagem.value.trim(),
    };

    setFormData(data);
    setShowModal(true);

    form.reset();
    setValidated(false);
  };

  return (
    <div className="form-section" id="contact" ref={ref}>
      <div className="form-container">
        <div className="form-header">
          <div className="form-title">
            <i className="fas fa-phone"></i>
            <h2 className="fw-bold">Fale Conosco</h2>
          </div>
          <p>
            Quer saber mais sobre o nosso app, tirar dúvidas ou bater um papo
            sobre como podemos facilitar seu trabalho? É só mandar uma mensagem
            — a gente responde rapidinho!
          </p>
        </div>

        <div className="form-box">
          <form
            ref={formRef}
            className={`needs-validation ${validated ? "was-validated" : ""}`}
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="nome" className="form-label">
                  Nome completo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  pattern="^[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÀÇ][a-záéíóúâêîôûãõàç]+(?: [A-Za-zÁÉÍÓÚÂÊÎÔÛÃÕÀÇáéíóúâêîôûãõàç]+)+$"
                  required
                />
                <div className="valid-feedback">Tudo certo!</div>
                <div className="invalid-feedback">
                  Por favor, insira seu nome completo.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email profissional
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="exemplo@empresa.com"
                  required
                />
                <div className="valid-feedback">Email válido.</div>
                <div className="invalid-feedback">
                  Por favor, insira um email válido.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="telefone" className="form-label">
                  Telefone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefone"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  inputMode="numeric"
                  pattern="[0-9]{10,11}"
                  required
                />
                <div className="valid-feedback">Telefone válido.</div>
                <div className="invalid-feedback">
                  Digite um telefone válido com DDD.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="empresa" className="form-label">
                  Empresa
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="empresa"
                  name="empresa"
                  placeholder="Nome da empresa"
                  required
                />
                <div className="valid-feedback">Nome da empresa válido.</div>
                <div className="invalid-feedback">
                  Digite o nome da empresa.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="tipo" className="form-label">
                  Tipo de empresa
                </label>
                <select
                  className="form-select"
                  id="tipo"
                  name="tipo"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione o tipo
                  </option>
                  <option value="escola">Escola</option>
                  <option value="distribuidor">Distribuidor</option>
                </select>
                <div className="valid-feedback">Tipo selecionado.</div>
                <div className="invalid-feedback">
                  Escolha o tipo de empresa.
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="mensagem" className="form-label">
                  Mensagem
                </label>
                <textarea
                  className="form-control"
                  id="mensagem"
                  name="mensagem"
                  placeholder="Digite sua mensagem aqui..."
                  rows="4"
                  minLength="30"
                  maxLength="500"
                  required
                ></textarea>
                <div className="valid-feedback">Mensagem válida.</div>
                <div className="invalid-feedback">
                  Sua mensagem deve ter no mínimo 30 caracteres e no máximo 500.
                </div>
              </div>
            </div>

            <div className="form-submit">
              <button className="btn btn-primary form-button" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mensagem enviada com sucesso ✅</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Telefone:</strong> {formData.telefone}</p>
                <p><strong>Empresa:</strong> {formData.empresa}</p>
                <p><strong>Tipo:</strong> {formData.tipo}</p>
                <p><strong>Mensagem:</strong> {formData.mensagem}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="form-button btn btn-success"
                  onClick={() => setShowModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default ContactForm;
