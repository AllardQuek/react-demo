import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mind-blowing Git Shorcuts</title>
        <meta name="description" content="Git Shorcuts" />
      </Helmet>
      <Uploader />
    </div>
  );
}

export default App;
