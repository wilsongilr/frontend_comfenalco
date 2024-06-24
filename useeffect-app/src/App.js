import Lifecycle from "./components/Lifecycle";
// import FetchCard from "./components/FetchCard";

import { useState } from "react";
// import ResizeApp from "./components/ResizeApp";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Show/Hide
      </button>
      {show &&
       <Lifecycle/>
      }


      {/* <FetchCard/> */}

      

      {/* {show && <ResizeApp />} */}



    </div>
  );
}

export default App;
