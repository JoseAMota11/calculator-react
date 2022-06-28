import "../css/Button.css"

function Button({children, func, css}) {
  return (
    <>
      <button className={css} onClick={func}>
        {children}
      </button>
    </>
  )
}

export default Button