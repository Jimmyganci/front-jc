import { Link } from "react-router-dom";

function Button({
  name,
  urlDestination,
}: {
  name: string;
  urlDestination: string;
}) {
  return (
    <button type="button" className="neumOutset">
      <Link to={urlDestination}>{name}</Link>
    </button>
  );
}

export default Button;
