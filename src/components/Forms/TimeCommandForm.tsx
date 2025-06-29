// Third-party dependencies
import { useState } from "react";

// Current project dependencies
import CommandFormBase from "../Sections/CommandFormBase";
import Select from "../Common/Select";

const TIME_PRESETS = [
  { value: "day", label: "Día (day)" },
  { value: "noon", label: "Mediodía (noon)" },
  { value: "night", label: "Noche (night)" },
  { value: "midnight", label: "Medianoche (midnight)" },
  { value: "custom", label: "Personalizado..." },
];

const TimeCommandForm = () => {
  const [preset, setPreset] = useState("day");
  const [customTime, setCustomTime] = useState("1000");

  const finalTime = preset === "custom" ? customTime : preset;
  const command = `/time set ${finalTime}`;

  return (
    <CommandFormBase command={command} title="Comando de Tiempo">
      <div className="mb-4">
        <label
          htmlFor="timePreset"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Tiempo
        </label>

        <Select
          items={TIME_PRESETS}
          value={preset}
          onChange={(value) => setPreset(value)}
        />
      </div>

      {preset === "custom" && (
        <div className="mb-4">
          <label
            htmlFor="customTime"
            className="mb-2 block text-left text-sm font-medium text-white"
          >
            Ticks personalizados
          </label>

          <input
            id="customTime"
            type="number"
            min="0"
            max="24000"
            step="100"
            className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
            placeholder="Ej. 13000"
            value={customTime}
            onChange={(e) => setCustomTime(e.target.value)}
          />
        </div>
      )}
    </CommandFormBase>
  );
};

export default TimeCommandForm;
