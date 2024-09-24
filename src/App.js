import { useEffect, useState } from "react";
import Timer from "./Timer";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* to mount and unmount Timer component on dom */}
      <button onClick={() => setShowTimer(!showTimer)}>setShowTimer</button>
      {showTimer && <Timer />}
    </div>
  );
}

export default App;
