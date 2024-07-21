import React from "react";

function Card() {
  return (
    <div className="border-black-500 p-2">
      <div className="border-black-200 p-2 text-2xl font-bold">
        Card Heading
      </div>

      <div className="text-base font-light">Card content</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <header className="bg-red-500 text-white-500 text-2xl p-4 text-center font-bold">
        Vinodh practice
      </header>
      <main className="bg-blue-200 text-black text-base p-2 text-left my-2 font-light">
        I want to be a pro in everything I do
        <Card></Card>
      </main>

      <footer className="text-xl p-4 text-center bg-green-400 border-red-800 font-semibold">
        Footer text
      </footer>
    </div>
  );
}

export default App;
