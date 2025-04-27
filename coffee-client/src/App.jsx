import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./CoffeeCard";

function App() {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl font-bold text-blue-500 my-5">Update coffee</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((one) => (
          <CoffeeCard key={one._id} one={one}></CoffeeCard>
        ))}
      </div>

      <Link to="/addcoffee">
        <button className="px-6 py-2 border border-[#3B9DF8] bg-primary text-[#fff] hover:bg-secondary hover:text-[#3B9DF8] transition duration-300 rounded my-10 cursor-pointer">
          add coffee
        </button>
      </Link>
    </div>
  );
}

export default App;
