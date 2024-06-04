// you can start requesting data with useQuery Hook

import { AddGame } from "./components/AddGame";
import { DisplayGames } from "./components/DisplayGames";

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayGames />
      <AddGame />
    </div>
  );
}
