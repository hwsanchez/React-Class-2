const Paragraph = ({ color, children }) => {
  
  return (
    <p className={color}>{children}</p>
  )
}

export default Paragraph