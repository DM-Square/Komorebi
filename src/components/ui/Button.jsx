import React from "react";
import { motion } from "motion/react";
import { BUTTON_STYLES } from "../../constants/theme";

const Button = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  className = "",
  animated = true,
  ...props
}) => {
  const baseClass = BUTTON_STYLES[variant] || BUTTON_STYLES.primary;
  const finalClass = `${baseClass} ${className}`;

  const commonProps = {
    onClick,
    disabled,
    className: finalClass,
    ...props,
  };

  const motionProps = {
    ...commonProps,
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1, ease: "easeIn" },
  };

  const Component = animated ? motion.button : "button";

  return (
    <Component {...(animated ? motionProps : commonProps)}>
      {children}
    </Component>
  );
};

export default Button;
