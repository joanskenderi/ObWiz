const Title = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 text-center mb-6 relative">
      {children}
      <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-violet-500 via-blue-600 to-blue-800 rounded"></span>
    </h1>
  );
};

export default Title;
