export const Tooltip = ({ text, children }) => {
  return (
    <span className="group relative inline-block">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-xs -translate-x-1/2 whitespace-normal rounded-lg border border-gray-700/50 bg-gray-800 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
      >
        {text}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
      </span>
    </span>
  );
};
