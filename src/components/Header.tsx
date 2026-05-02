interface HeaderProps {
  showScreener: boolean;
  setShowScreener: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ showScreener, setShowScreener }) => {
  return (
    <header className='bg-gradient-to-br from-slate-700 to-slate-900 p-6 border-b border-blue-800 flex justify-between align-middle'>
      <div>
        <h1 className='text-xl font-bold text-blue-400'>
          📊 DSE Q3 2026 — EPS Growth Analysis
        </h1>
        <p className='text-sm text-slate-400 mt-1'>
          Dhaka Stock Exchange · YoY & 9M Analysis
        </p>
      </div>

      <button
        onClick={() => setShowScreener((s) => !s)}
        className='px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition flex align-middle'>
        {`Go to ${showScreener ? 'Dashboard' : 'Screener'}`}
      </button>
    </header>
  );
};

export default Header;
