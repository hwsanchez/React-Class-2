import "./App.css";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import LeftMenu from "./LeftMenu";

function App() {
  return (
    <main className="flex flex-col w-full h-full">
      <Header />

      <div className="flex h-full">
        <LeftMenu />

        <Body />
      </div>
      <Footer />
    </main>
  );
}

export default App;
