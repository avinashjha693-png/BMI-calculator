import React, { useState } from 'react';

const App = () => {
  // State for inputs and results
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const result = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(result);
    }
  };

  return (
    // 1. Animated Gradient Background
    <div className="min-h-screen w-screen flex justify-center items-center bg-gradient-to-br from-green-400 to-teal-600 transition-all duration-700">
      
      {/* 2. Card with Entrance Animation */}
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md mx-4 transform transition-all hover:scale-[1.02] duration-300">
        
        <h1 className="text-4xl font-black text-gray-800 mb-8 text-center tracking-tight">
          BMI Calculator
        </h1>

        <div className="space-y-6">
          {/* Weight Input */}
          <div className="flex flex-col">
            <label className="text-gray-500 font-bold mb-2 ml-1 text-sm uppercase">Weight (kg)</label>
            <input 
              type="number" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="bg-gray-100 border-2 border-transparent focus:border-teal-500 rounded-xl px-4 py-4 focus:ring-4 focus:ring-teal-100 transition-all outline-none text-lg"
              placeholder="0"
            />
          </div>

          {/* Height Input */}
          <div className="flex flex-col">
            <label className="text-gray-500 font-bold mb-2 ml-1 text-sm uppercase">Height (cm)</label>
            <input 
              type="number" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="bg-gray-100 border-2 border-transparent focus:border-teal-500 rounded-xl px-4 py-4 focus:ring-4 focus:ring-teal-100 transition-all outline-none text-lg"
              placeholder="0"
            />
          </div>

          {/* 3. Interactive Button with 'Squish' Effect */}
          <button 
            onClick={calculateBMI}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black py-4 rounded-xl shadow-lg hover:shadow-teal-200 active:scale-95 transition-all duration-200 transform mt-4 uppercase tracking-widest"
          >
            Calculate BMI
          </button>
        </div>

        {/* 4. Result Section (Only shows when bmi exists) */}
        {bmi && (
          <div className="mt-8 pt-6 border-t border-gray-100 text-center animate-pop-in">
            <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">Your BMI is</p>
            <h2 className="text-6xl font-black text-teal-600 my-2">{bmi}</h2>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-100 text-teal-700 font-bold text-sm">
              {bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Healthy Weight' : 'Overweight'}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;