const Input = ({ label, type = 'text', placeholder, value, onChange }) => (
  <div>
    <label className="block text-slate-700 font-semibold mb-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition"
    />
  </div>
);

export default Input;
