import { Link } from "react-router-dom";

function Button({
  name,
  urlDestination,
  type,
  className,
  onClick,
}: {
  name: string;
  urlDestination?: string;
  type: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => onClick && onClick()}
      type={type === "submit" ? "submit" : "button"}
      className={className}
    >
      {urlDestination && <Link to={urlDestination || ""}>{name}</Link>}
      {!urlDestination && name}
    </button>
  );
}

export default Button;
