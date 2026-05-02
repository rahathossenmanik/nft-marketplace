import React from 'react';

const Footer = () => {
  return (
    <nav className='bg-gradient-to-br from-slate-700 to-slate-900 p-6 border-b border-blue-800 flex align-middle justify-between'>
      <div>
        <h1 className='text-xl font-bold text-blue-400'>
          📊 DSE Q3 2026 — EPS Growth Analysis
        </h1>
        <p className='text-sm text-slate-400 mt-1'>
          Dhaka Stock Exchange · YoY & 9M Analysis
        </p>
      </div>
      <div className='text-sm text-slate-400 mt-1 me-3 flex align-middle'>
        &copy; {new Date().getFullYear()} | MANIK HOSEN
      </div>
    </nav>
  );
};

export default Footer;
