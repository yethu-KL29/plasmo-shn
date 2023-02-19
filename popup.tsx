import { useState } from "react"
import Navbar from "./components/Navbar";
import App from "./components/App";
function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
      }}>
                   
      <Navbar/>
      <App/>
    </div>
  ) 
}

export default IndexPopup
