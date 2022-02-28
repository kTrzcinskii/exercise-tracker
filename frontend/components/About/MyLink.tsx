import Link from "next/link";

type MyLinkProps = React.LinkHTMLAttributes<HTMLLinkElement> & {
  leftOrRight?: "left" | "right";
};

const MyLink: React.FC<MyLinkProps> = ({
  children,
  href = "/",
  leftOrRight = "left",
}) => {
  return (
    <li
      className={`hover:text-blue-600 ${
        leftOrRight === "left" ? "hover:translate-x-3" : "hover:-translate-x-3"
      } transition-all duration-200 ease-in-out`}
    >
      <Link href={href} passHref>
        <a target='_blank'>{children}</a>
      </Link>
    </li>
  );
};

export default MyLink;
