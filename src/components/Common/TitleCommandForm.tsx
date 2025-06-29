import React, { useState } from "react";

const TitleCommandForm = () => {
  const [target, setTarget] = useState("@a");
  const [mensaje, setMensaje] = useState("¡Hola Mundo!");
  const [color, setColor] = useState("white");
  const [bold, setBold] = useState(true);
  const [copied, setCopied] = useState(false);

  const command = `/title ${target} title ${JSON.stringify({
    text: mensaje,
    color: color,
    bold: bold,
  })}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="w-full space-y-6 rounded-xl border border-white/20 bg-white/10 p-6 text-center text-white shadow-2xl backdrop-blur-md">
      <h2 className="text-2xl font-bold text-white/90">
        Generador de Comandos
      </h2>

      <input
        className="w-full rounded-md bg-black/40 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm"
        placeholder="@a, @p, nombre..."
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />

      <input
        className="w-full rounded-md bg-black/40 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm"
        placeholder="Mensaje del título"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <select
        className="w-full rounded-md bg-black/40 px-4 py-2 text-white backdrop-blur-sm"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="white">Blanco</option>
        <option value="red">Rojo</option>
        <option value="green">Verde</option>
        <option value="yellow">Amarillo</option>
        <option value="blue">Azul</option>
        <option value="gold">Dorado</option>
        <option value="aqua">Aqua</option>
      </select>

      <label className="flex items-center justify-center gap-2 text-sm text-white/80">
        <input type="checkbox" checked={bold} onChange={() => setBold(!bold)} />
        Texto en negrita
      </label>

      <div className="hide-scrollbar overflow-x-auto">
        <code className="block w-max rounded-md border border-white/20 bg-black/40 px-4 py-2 font-mono text-sm whitespace-nowrap text-amber-300 backdrop-blur-sm">
          {command}
        </code>
      </div>

      <button
        onClick={copyToClipboard}
        className="w-full rounded-md bg-gradient-to-br from-green-700 via-lime-500 to-yellow-400 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:from-green-800 hover:via-lime-600 hover:to-yellow-500"
      >
        {copied ? "✅ Copiado" : "📋 Copiar comando"}
      </button>
    </div>
  );
};

export default TitleCommandForm;
