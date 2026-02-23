// App.jsx
// Componente raiz: decide qual tela mostrar (login ou sucesso)

import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SuccessScreen from "./components/SuccessScreen";
import "./App.css";

export default function App() {
  // false = tela de login | true = tela de sucesso
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      {loggedIn
        ? <SuccessScreen onBack={() => setLoggedIn(false)} />
        : <LoginForm onLogin={() => setLoggedIn(true)} />
      }
    </div>
  );
}
