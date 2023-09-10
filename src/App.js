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
      <Header />
      <Introduction />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
