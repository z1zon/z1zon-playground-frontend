import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

type ButtonType = 'default';
type ButtonColor = 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  buttonColor?: ButtonColor;
  active?: boolean;
  className?: string;
}

function Button({
  buttonType = 'default', buttonColor = 'primary', disabled, active, className, children, ...rest
}:PropsWithChildren<ButtonProps>) {
  const commonClassName = clsx(
    styles.button,
    styles[buttonType],
    styles[buttonColor],
    {
      [styles.active]: active,
      [styles.disabled]: disabled,
    },
    className,
  );

  return (
    <button className={commonClassName} disabled={disabled} type="button" {...rest}>
      {children}
    </button>
  );
}

export default Button;
