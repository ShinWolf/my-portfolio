import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
