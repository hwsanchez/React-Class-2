const FooterSection = ({ programmer = "Me!", year = "this one!"}) => {
  
  return (

    <footer className="h-12 border-t border-slate-400 flex items-center px-4 text-sm text-slate-400">
      by {programmer} ({year})
    </footer>
  );

}

export default FooterSection