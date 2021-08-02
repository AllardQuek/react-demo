import "./App.css";
import { Helmet } from "react-helmet";
import Uploader from "./components/Uploader";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>VS Code Extensions</title>
        <meta
          name="description"
          content="VS Code Themes You Didn't Know About"
        />
      </Helmet>
      <Uploader />
    </div>
  );
}

export default App;
