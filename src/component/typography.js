import React from "react";
import cn from "classnames";
import "./typography.css";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading1: "h6",
  subheading2: "h6",
  body1: "p",
  body2: "p",
};

const Typography = ({ variant, color, children, ...props }) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`typography--color-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
