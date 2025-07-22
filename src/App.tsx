import { Dashboard } from "./components/Dashboard"
import GlobalStyles from "./styles/GlobalStyle"

function App() {


  return (
    <>
      <GlobalStyles />
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Dashboard />
      </div>
    </>
  );
}

export default App
