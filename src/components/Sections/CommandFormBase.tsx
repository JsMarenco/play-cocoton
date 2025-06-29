// Third-party dependencies
import { useState, type ReactNode } from "react";
import { FaRegClipboard, FaCheck } from "react-icons/fa";
import cn from "../../utils/cn";

// Current project dependencies

const CommandFormBase = ({
  command,
  title,
  children,
  commandClassName = "",
}: {
  command: string;
  children: ReactNode;
  title: string;
  commandClassName?: string;
}) => {
  const [copied, setCopied] = useState(false);

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
    <div className="mb-4 w-full max-w-xl break-inside-avoid space-y-6 rounded-xl border border-white/20 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-md">
      <h2 className="text-2xl font-bold text-white/90">{title}</h2>

      {children}

      <code
        className={cn(
          "scrollbar block overflow-auto rounded-md border border-white/20 bg-black/40 px-4 pt-2 pb-1 text-left font-mono text-sm whitespace-nowrap text-amber-300 backdrop-blur-sm",
          commandClassName,
        )}
      >
        {command}
      </code>

      <button
        onClick={copyToClipboard}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-green-700 via-lime-500 to-yellow-400 px-4 py-2 font-semibold text-white shadow-md transition duration-300 hover:from-green-800 hover:via-lime-600 hover:to-yellow-500"
      >
        {copied ? (
          <>
            <FaCheck className="text-white" />
            Copiado
          </>
        ) : (
          <>
            <FaRegClipboard className="text-white" />
            Copiar comando
          </>
        )}
      </button>
    </div>
  );
};

export default CommandFormBase;
