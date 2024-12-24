import styles from './Button.module.scss'

const Button = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => <button className={styles.button} {...props} />

export default Button
