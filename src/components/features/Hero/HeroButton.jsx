

export const HeroButton = ({ text, onclick, styles, className }) => {
  return (
    <button onClick={onclick} style={styles} className={className}>
      {text}
    </button>
  )
}
