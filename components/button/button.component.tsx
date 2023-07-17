// "use client";
// import React, { type ButtonHTMLAttributes } from "react";

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//   children?: React.ReactNode;
//   className?: string;
//   type?: string;
//   id?: string;
//   isActive?: boolean;
//   onClick?: any;
// };

// // TODO: add styles and add to constants
// export const CustomButton: React.FC<ButtonProps> = ({
//   children,
//   className = "bg-violet-500 hover:bg-violet-700 text-white",
//   onClick,
//   isActive,
//   id,
//   type = "button",
//   ...props
// }) => (
//   <button
//     {...props}
//     id={id}
//     type={type}
//     className={className}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// );

import cn from "clsx";
import styles from "./button.module.scss";
import type { ButtonHTMLAttributes, LegacyRef } from "react";

type TypeColor = "grey";

type Iterator = Record<TypeColor, string>;

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  color?: TypeColor;
  outline?: boolean;
  children?: React.ReactNode | JSX.Element | string;
  refBtn?: LegacyRef<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({
  className = "bg-active",
  color,
  outline,
  children,
  refBtn,
  ...other
}: Props) => {
  const classColor: Iterator = {
    grey: styles.colorGrey,
  };

  const classRoot = cn(
    styles.root,
    color ? classColor[color] : null,
    outline ? styles.outline : null,
    className ? className : null
  );
  // eslint-disable-next-line
  return (
    <button color={color} className={classRoot}>
      {children}
    </button>
  );
};
