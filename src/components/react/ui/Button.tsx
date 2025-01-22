import styles from './Button.module.scss'

const Button = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => <button {...props} className={`${styles.button} ${props.className ?? ''}`} />

export default Button
