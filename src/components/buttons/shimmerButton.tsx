export const ShimmerButton = ({ text }: { text: string }) => {
  console.log(text, 'text');
  return (
    <div
      className="
      inline-flex 
      h-12 
      items-center 
      justify-center 
      rounded-md border
      border-slate-600 
      bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[200% 120%]  
      bg-no-repeat
      px-6 
      font-medium 
      text-slate-400 
      transition-colors 
      focus:outline-none focus:ring-2 
      focus:ring-slate-400
      focus:ring-offset-2   
      focus:ring-offset-slate-50
      animate-shimmer
      "
    >
      {text}
    </div>
  );
};
