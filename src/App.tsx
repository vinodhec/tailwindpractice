import React from "react";

function Card() {
  return (
    <div className="rounded bg-gray-200 border-gray-400 text-gray-700 text-2xl p-6">
      <div className="p-4 mb-2 font-bold">Card Heading</div>

      <div className="p-4">Card content</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <header className="bg-blue-300 text-white-300 text-xl font-bold px-2 text-center">
        Vinodh practice
      </header>

      <Card></Card>
    </div>
  );
}

export default App;
