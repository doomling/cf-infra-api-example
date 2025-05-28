import { useState } from "react";

function Greeter() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const send = async () => {
    try {
      const res = await fetch(
        `/api/hello-by-name?nombre=${encodeURIComponent(name)}`
      );
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Error desconocido");
      } else {
        setError("");
      }
    } catch (err) {
      setError("Error de red o del servidor");
    }
  };

  return (
    <div>
      <h1>Hola</h1>
      <input
        type="text"
        placeholder="Ingresá tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={send}>Enviar</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Greeter;
