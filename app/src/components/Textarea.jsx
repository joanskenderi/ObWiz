const Textarea = ({ name, label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-slate-700 font-semibold mb-1">{label}</label>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 transition resize-none"
      rows="3"
    ></textarea>
  </div>
);

export default Textarea;
