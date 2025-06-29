// Third-party dependencies
import { useState } from "react";

// Current project dependencies
import Select from "../Common/Select";
import CommandFormBase from "../Sections/CommandFormBase";

const PARTICLES = [
  { value: "explode", label: "Explosión" },
  { value: "largeexplode", label: "Gran explosión" },
  { value: "fireworksSpark", label: "Chispa de fuegos artificiales" },
  { value: "bubble", label: "Burbuja" },
  { value: "splash", label: "Salpicadura" },
  { value: "wake", label: "Estela" },
  { value: "crit", label: "Crítico" },
  { value: "magicCrit", label: "Crítico mágico" },
  { value: "smoke", label: "Humo" },
  { value: "largesmoke", label: "Humo grande" },
  { value: "cloud", label: "Nube" },
  { value: "reddust", label: "Redstone" },
  { value: "snowballpoof", label: "Nieve" },
  { value: "dripWater", label: "Gota de agua" },
  { value: "dripLava", label: "Gota de lava" },
  { value: "angryVillager", label: "Aldeano enojado" },
  { value: "happyVillager", label: "Aldeano feliz" },
  { value: "heart", label: "Corazón" },
];

const ParticleCommandForm = () => {
  const [particle, setParticle] = useState("explode");
  const [x, setX] = useState("~");
  const [y, setY] = useState("~");
  const [z, setZ] = useState("~");
  const [dx, setDx] = useState("0");
  const [dy, setDy] = useState("0");
  const [dz, setDz] = useState("0");
  const [speed, setSpeed] = useState("1");
  const [count, setCount] = useState("1");
  const [target, setTarget] = useState("@a");

  const command = `/particle ${particle} ${x} ${y} ${z} ${dx} ${dy} ${dz} ${speed} ${count} ${target}`;

  return (
    <CommandFormBase command={command} title="Comando de Partículas">
      <div className="mb-4">
        <label
          htmlFor="targetInput"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Objetivo (selector)
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
          htmlFor="particleSelect"
          className="mb-2 block text-left text-sm font-medium text-white"
        >
          Partícula
        </label>

        <Select
          items={PARTICLES}
          value={particle}
          onChange={(e) => setParticle(e)}
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["X", "Y", "Z"].map((axis, idx) => {
          const val = [x, y, z][idx];
          const setVal = [setX, setY, setZ][idx];

          return (
            <div key={axis}>
              <label className="mb-2 block text-left text-sm font-medium text-white">
                {axis}
              </label>

              <input
                type="text"
                className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
                placeholder="~"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
          );
        })}
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["dX", "dY", "dZ"].map((axis, idx) => {
          const val = [dx, dy, dz][idx];
          const setVal = [setDx, setDy, setDz][idx];

          return (
            <div key={axis}>
              <label className="mb-2 block text-left text-sm font-medium text-white">
                {axis}
              </label>

              <input
                type="number"
                min="0"
                step="any"
                className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
                placeholder="0"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
          );
        })}
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="speedInput"
            className="mb-2 block text-left text-sm font-medium text-white"
          >
            Velocidad
          </label>

          <input
            id="speedInput"
            type="number"
            min="0"
            step="any"
            className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
            placeholder="1"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="countInput"
            className="mb-2 block text-left text-sm font-medium text-white"
          >
            Cantidad
          </label>

          <input
            id="countInput"
            type="number"
            min="1"
            step="1"
            className="w-full rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40"
            placeholder="1"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
      </div>
    </CommandFormBase>
  );
};

export default ParticleCommandForm;
