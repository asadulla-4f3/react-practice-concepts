import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import PortalModal from "./components/Portals/PortalModal";
import ErrorBoundary from "./components/ErrorBoundaries/ErrorBoundary";
import Hero from "./components/ErrorBoundaries/Hero";
import { UserProvider } from "./components/ContextComps/SampleContext";
import CompC from "./components/ContextComps/CompC";
import GetPosts from "./components/HTTPs/GetPosts";
import POSTPosts from "./components/HTTPs/POSTPosts";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <PortalModal /> */}
      {/* <ErrorBoundary>
        <Hero name="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero name="Joker" />
      </ErrorBoundary> */}
      {/* <UserProvider value="Asadulla">
        <CompC />
      </UserProvider> */}
      {/* <GetPosts /> */}
      <POSTPosts />
    </div>
  );
}

export default App;
