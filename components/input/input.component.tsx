import styles from "./input.module.scss";
// import { classnames } from "@helpers";

type AllowedType = string[] | null[] | any[];

const classnames = <T extends AllowedType>(...className: T) =>
  [...className].join(" ");

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type?: Exclude<React.HTMLInputTypeAttribute, "button" | "checkbox" | "radio">;
  className?: string;
  classNameContainer?: string;
  classNameIconLeft?: string;
  classNameIconRight?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
};

export const Input: React.FC<Props> = ({
  type = "text",
  className,
  classNameIconLeft,
  classNameIconRight,
  classNameContainer,
  iconLeft,
  iconRight,
  ...other
}: Props) => {
  const classInput = classnames(
    styles.input,
    iconLeft ? styles.isIconLeft : null,
    iconRight ? styles.isIconRight : null,
    "is-input",
    className
  );
  const classInputIconLeft = classnames(styles.iconLeft, classNameIconLeft);
  const classInputIconRight = classnames(styles.iconRight, classNameIconRight);
  const classContainer = classnames(styles.root, classNameContainer);
  return (
    <div className={classContainer}>
      {iconLeft && <span className={classInputIconLeft}>{iconLeft}</span>}
      <input
        type={type}
        className={classInput}
        // eslint-disable-next-line
        {...other}
      />
      {iconRight && <span className={classInputIconRight}>{iconRight}</span>}
    </div>
  );
};
