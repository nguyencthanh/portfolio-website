export default function Card({ children, className = "" }) {
    return (
      <div className="relative w-screen h-screen p-1">
        <div className={`absolute top-3 left-0 w-[calc(100vw-40px)] h-[calc(100vh-60px)] border flex-col rounded-xl bg-[#D9D9D9] flex items-center justify-center text-center ${className}`}>
          {children}
        </div>
      </div>
    );
  }
  