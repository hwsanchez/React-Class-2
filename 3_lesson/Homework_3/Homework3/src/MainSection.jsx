function MainSection(props) {

  return (
    <article className="p-4">
      Hello {props.name || "User"},
      <br />
      <br />
      you have {props.numberOfMessages} unread messages. 
      <br />  
      <br />
        {props.numberOfMessages > 0 && "Please go to your inbox to read them."}
    </article>
  );
}

export default MainSection