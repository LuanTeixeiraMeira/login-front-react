// components/SuccessScreen.jsx
// Tela exibida após o login bem-sucedido

import "./SuccessScreen.css";

// onBack → função para voltar à tela de login
export default function SuccessScreen({ onBack }) {
  return (
    <div className="sucesso-card">
      <div className="sucesso-icone">✓</div>
      <h2 className="sucesso-titulo">Login realizado!</h2>
      <p className="sucesso-texto">
        Você entrou com sucesso.<br />
        Em um projeto real, você seria redirecionado para o painel.
      </p>
      <button className="btn-voltar" onClick={onBack}>
        ← Voltar ao login
      </button>
    </div>
  );
}
