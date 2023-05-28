
function HeaderSection({count, name, onClickUp, onClickDown, onUserUpdate }) {
  let messageClass = "absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 rounded-full";
  if (count > 0) {
    messageClass = messageClass + " bg-red-600";
  }
  console.log('Value of count in Header: ' + count);

    
  return (
    <header className="w-full bg-gray-100 border-b border-slate-400 h-16 flex items-center px-4 justify-between">
      <div className="text-xl font-bold">
        <label for="username"> User: </label>
        <input type="text" id="username" value={name} placeholder="type your name" name="username" onChange={onUserUpdate}/>
      </div>
      <button onClick={onClickUp}>+</button>
      <button onClick={onClickDown}>-</button>
      <span className="relative inline-block">
        <svg
          className="w-6 h-6 text-slate-600 fill-current stroke-2"
          viewBox="0 0 20 20"
        >
          <path
            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
        <span className={messageClass}>
        {/* {Logical AND} */}
          {count > 0 && count}
      </span>
      </span>
    </header>
  );
}

export default HeaderSection