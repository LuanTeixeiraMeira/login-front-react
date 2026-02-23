# Login App — React

Teste com IA

## Como rodar

1. Instale as dependências:
```
npm install
```

2. Inicie o projeto:
```
npm start
```

O navegador abre automaticamente em http://localhost:3000

---

## Estrutura

```
src/
├── index.js                  → Ponto de entrada da aplicação
├── index.css                 → Reset CSS
├── App.jsx                   → Componente raiz (controla as telas)
├── App.css                   → Estilos globais e variáveis de cor
└── components/
    ├── LoginForm.jsx         → Formulário com validação
    ├── LoginForm.css         → Estilos do formulário
    ├── SuccessScreen.jsx     → Tela de sucesso pós-login
    └── SuccessScreen.css     → Estilos da tela de sucesso
```

## O que você aprende aqui

- useState para controlar campos, erros e estados de loading
- Props para comunicação entre componentes (onLogin, onBack)
- Validação de formulário sem bibliotecas externas
- CSS separado por componente com variáveis CSS
- Renderização condicional com operador ternário
