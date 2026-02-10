import styles from './Input.module.css';

type InputProps = {
  label?: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
};

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
