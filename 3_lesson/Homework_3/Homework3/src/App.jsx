
import "./App.css";
import MainSection from "./MainSection";
import HeaderSection from "./HeaderSection";
import LeftSection from "./LeftSetion";
import FooterSection from "./FooterSection";
import { useState } from "react";



function App() { 

  const [messages, setMessages] = useState(0)
  const [user, setUser] = useState("user name")

  // let messages = 2;
  // let userName = "";
  let nameOfProgrammer = "Hugo";
  let yearOfProduction = "2023";
  let menuOptions = ['Home', 'About', 'Inbox'];

  const clickUp = () => {
    console.log("Click Up!");
    setMessages(messages + 1);
  };

  const clickDown = () => {
    console.log("Click Down!");
    if (messages > 0) {
      setMessages(messages -1)     
    }
  };

    const userUpdate = (event) => {
      setUser(event.target.value);
    };

  return (
    <>
      <main className="flex flex-col w-full h-full">
        <HeaderSection count={messages} name={user} onClickUp={clickUp} onClickDown={clickDown} onUserUpdate={userUpdate} />
        <div className="flex h-full">
          
          <LeftSection Options={menuOptions} />

          <MainSection name={user} numberOfMessages={messages} />
        </div>

        <FooterSection programmer={ nameOfProgrammer} year={yearOfProduction} />

      </main>
    </>
  );
}

export default App;
