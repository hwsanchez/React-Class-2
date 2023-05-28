function LeftSection(props) {
  
  return (
    <aside className="w-1/4 h-full border-slate-400 border-r p-4">
      <ul className="flex flex-col gap-2 font-semibold">
        {props.Options.map((option)=> <li>
          <a className="text-slate-700 hover:text-slate-900" href="#">
            {option}
          </a>
        </li>)}
      </ul>
    </aside>
  );
}

export default LeftSection