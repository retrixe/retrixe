import styles from './Select.module.scss'

const Select = (
  props: React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
) => <select className={styles.select} {...props} />

export default Select
