const Dropdown = ({ label, options, value, onChange }) => (
  <div>
    <label className="block text-slate-700 font-semibold mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 rounded-lg bg-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
    >
      <option value="">Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdown;
