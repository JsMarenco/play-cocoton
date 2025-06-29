// Third-party dependencies
import { useState } from "react";

// Current project dependencies
import cn from "../../utils/cn";
import Select from "../Common/Select";
import CommandFormBase from "../Sections/CommandFormBase";

const COLORS = [
  { value: "white", label: "Blanco" },
  { value: "red", label: "Rojo" },
  { value: "green", label: "Verde" },
  { value: "yellow", label: "Amarillo" },
  { value: "blue", label: "Azul" },
  { value: "gold", label: "Dorado" },
  { value: "aqua", label: "Aqua" },
];

const TitleCommandForm = () => {
  const [target, setTarget] = useState("@a");
  const [mensaje, setMensaje] = useState("¡Hola Mundo!");
  const [color, setColor] = useState("white");
  const [bold, setBold] = useState(true);

  const command = `/title ${target} title ${JSON.stringify({
    text: mensaje,
    color: color,
    bold: bold,
  })}`;

  return (
    <CommandFormBase
      command={command}
      title="Comando de Título"
      commandClassName="pb-0"
    >
      <div className="mb-4">
        <label
          htmlFor="targetInput"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Objetivo (@a, @p, nombre)
        </label>

        <input
          id="targetInput"
          type="text"
          className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
          placeholder="@a, @p, nombre..."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="mensajeInput"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Mensaje del título
        </label>

        <input
          id="mensajeInput"
          type="text"
          className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
          placeholder="Mensaje del título"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="colorSelect"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Color del mensaje
        </label>

        <Select items={COLORS} value={color} onChange={(e) => setColor(e)} />
      </div>

      <div className="mb-4 flex w-full items-center justify-between gap-3">
        <span className="text-sm text-white/80">Texto en negrita</span>

        <button
          type="button"
          role="switch"
          aria-checked={bold}
          onClick={() => setBold(!bold)}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300",
            bold ? "bg-white/80" : "bg-white/30",
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-black transition-transform duration-300",
              bold ? "translate-x-6" : "translate-x-1",
            )}
          />
        </button>
      </div>
    </CommandFormBase>
  );
};

export default TitleCommandForm;
