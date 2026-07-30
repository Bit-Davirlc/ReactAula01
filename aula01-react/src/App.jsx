import { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Contador</h1>
      <p>Valor: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      <button onClick={() => setContador(contador - 1)}>Decrementar</button>

      {contador >= 10 && <p>Chegou a 10!</p>}
    </div>
  );
}
