// Third-party dependencies
import { useState, useRef, useEffect } from "react";

// Current project dependencies
import cn from "../../utils/cn";

const DarkSelect = ({
  value,
  onChange,
  items,
}: {
  items: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = items.find((c) => c.value === value)?.label || "";

  return (
    <div className="relative w-full" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg bg-gradient-to-br from-black/50 to-black/30 px-4 py-2 text-white shadow-md ring-1 ring-white/20 backdrop-blur-lg focus:ring-2 focus:ring-white/40 focus:outline-none"
      >
        {selectedLabel}
        <span className="ml-2 text-white/60">▼</span>
      </button>

      {open && (
        <ul className="scrollbar absolute z-[90] mt-1 max-h-60 w-full gap-2 overflow-auto rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 px-4 py-2 text-white placeholder-white/50 shadow-md ring-1 ring-white/20 backdrop-blur-lg transition-all outline-none focus:ring-2 focus:ring-white/40">
          {items.map(({ value: val, label }) => (
            <li
              key={val}
              onClick={() => {
                onChange(val);
                setOpen(false);
              }}
              className={cn(
                "my-1.5 cursor-pointer rounded-lg px-4 py-2 text-left text-white hover:bg-white/20",
                val === value && "bg-white/30 font-semibold",
              )}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DarkSelect;
