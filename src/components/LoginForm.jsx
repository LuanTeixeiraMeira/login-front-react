
import { useState } from "react";
import "./LoginForm.css";

function validarCampos(email, senha) {
  const erros = {};

  if (!email)
    erros.email = "O email é obrigatório.";
  else if (!email.includes("@"))
    erros.email = "Digite um email válido.";

  if (!senha)
    erros.senha = "A senha é obrigatória.";
  else if (senha.length < 6)
    erros.senha = "A senha precisa ter pelo menos 6 caracteres.";

  return erros;
}

export default function LoginForm({ onLogin }) {
  const [email, setEmail]         = useState("");
  const [senha, setSenha]         = useState("");
  const [erros, setErros]         = useState({});
  const [carregando, setCarregando] = useState(false);

  function handleSubmit(evento) {
    evento.preventDefault();

    const errosEncontrados = validarCampos(email, senha);

    if (Object.keys(errosEncontrados).length > 0) {
      setErros(errosEncontrados);
      return;
    }

    setErros({});
    setCarregando(true);

    
    setTimeout(() => {
      setCarregando(false);
      onLogin();
    }, 1500);
  }

  return (
    <div className="card">
      {/* Cabeçalho */}
      <div className="logo">A</div>
      <h1 className="titulo">Bem-vindo de volta</h1>
      <p className="subtitulo">Entre com sua conta para continuar</p>

      <form className="form" onSubmit={handleSubmit}>

        {/* Campo Email */}
        <div className="campo">
          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            className={`input ${erros.email ? "input--erro" : ""}`}
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {erros.email && <span className="mensagem-erro">{erros.email}</span>}
        </div>

        {/* Campo Senha */}
        <div className="campo">
          <div className="campo__topo">
            <label className="label" htmlFor="senha">Senha</label>
            <button type="button" className="link-btn">Esqueceu a senha?</button>
          </div>
          <input
            id="senha"
            className={`input ${erros.senha ? "input--erro" : ""}`}
            type="password"
            placeholder="••••••••"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {erros.senha && <span className="mensagem-erro">{erros.senha}</span>}
        </div>

        {/* Botão principal */}
        <button
          type="submit"
          className="btn-primario"
          disabled={carregando}
        >
          {carregando ? "Entrando..." : "Entrar"}
        </button>

        {/* Divisor */}
        <div className="divisor">
          <span className="divisor__linha" />
          <span className="divisor__texto">ou continue com</span>
          <span className="divisor__linha" />
        </div>

        {/* Botão Google */}
        <button type="button" className="btn-google">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M5.26 9.77A7.5 7.5 0 0 1 12 4.5c1.76 0 3.37.61 4.63 1.62l3.44-3.44A12 12 0 0 0 0 12c0 1.98.48 3.84 1.33 5.49l4.14-3.22A7.5 7.5 0 0 1 4.5 12c0-.78.1-1.53.26-2.23z"/>
            <path fill="#FBBC05" d="M12 4.5c1.76 0 3.37.61 4.63 1.62l3.44-3.44A12 12 0 0 0 12 0C7.39 0 3.36 2.46 1.33 6.11l4.14 3.22A7.5 7.5 0 0 1 12 4.5z"/>
            <path fill="#4285F4" d="M23.9 12.27c0-.79-.07-1.55-.2-2.27H12v4.29h6.68a5.71 5.71 0 0 1-2.47 3.74l3.85 2.99C22.4 19.01 23.9 15.84 23.9 12.27z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.85-2.99A7.5 7.5 0 0 1 4.5 14.28l-4.14 3.22A12 12 0 0 0 12 24z"/>
          </svg>
          Google
        </button>

      </form>

      <p className="rodape">
        Não tem uma conta?{" "}
        <button type="button" className="link-btn">Criar conta</button>
      </p>
    </div>
  );
}
