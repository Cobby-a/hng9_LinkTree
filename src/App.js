// import "./index.css";
import Profile from "./profile";
import Links from "./links";
import Styles from "./styles";
import Footer from "./footer";

function App() {
  return (
    <>
      <header className="app-container">
      <Profile/>
      </header>
      <main className="app-container">
      <Links/>
      <Styles/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </>  
  );
}

export default App;
