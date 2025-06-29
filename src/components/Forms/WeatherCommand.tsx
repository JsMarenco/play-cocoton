// Third-party dependencies
import { useState } from "react";

// Current project dependencies
import Select from "../Common/Select";
import CommandFormBase from "../Sections/CommandFormBase";

const WEATHER_TYPES = [
  { value: "clear", label: "Despejado" },
  { value: "rain", label: "Lluvia" },
  { value: "thunder", label: "Tormenta" },
];

const WeatherCommandForm = () => {
  const [type, setType] = useState("clear");
  const [duration, setDuration] = useState("1000");

  const command = `/weather ${type} ${duration}`;

  return (
    <CommandFormBase command={command} title="Comando de Clima">
      <div className="mb-4">
        <label
          htmlFor="weatherSelect"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Tipo de clima
        </label>

        <Select
          items={WEATHER_TYPES}
          value={type}
          onChange={(e) => setType(e)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="durationInput"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Duración (ticks)
        </label>

        <input
          id="durationInput"
          type="number"
          className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
          placeholder="1000"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min={1}
        />
      </div>
    </CommandFormBase>
  );
};

export default WeatherCommandForm;
