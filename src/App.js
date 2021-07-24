import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Approutes";
import APIContextProvider from "./components/Context/APIContext";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <APIContextProvider>
        <Header />
        <div className="App">
          <Container>
            <AppRoutes />
          </Container>
        </div>
        <Navigation />
      </APIContextProvider>
    </BrowserRouter>
  );
}

export default App;
