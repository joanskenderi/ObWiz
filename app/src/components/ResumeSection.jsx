const ResumeSection = ({ title, content }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      {content.map((item, index) => (
        <p key={index} className="text-slate-700">
          {item.label}: {item.value}
        </p>
      ))}
    </div>
  );
};

export default ResumeSection;
