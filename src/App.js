import Header from "./layout/Header";
import Introduction from "./layout/Introduction";
import Skills from "./layout/Skills";
import Profile from "./layout/Profile";
import Projects from "./layout/Projects";
import Footer from "./layout/Footer";

import "./style/reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="content" className="w-4/5 mx-auto my-8">
        <Header />
        <Introduction />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
