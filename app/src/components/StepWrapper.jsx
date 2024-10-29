const StepWrapper = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      {children}
    </div>
  );
};

export default StepWrapper;
