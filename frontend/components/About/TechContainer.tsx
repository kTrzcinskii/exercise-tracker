interface TechContainerProps {
  leftOrRight: "left" | "right";
}

const TechContainer: React.FC<TechContainerProps> = ({
  children,
  leftOrRight,
}) => {
  let myClass = "";
  if (leftOrRight === "left") {
    myClass = "pl-2 border-l-2 border-blue-800";
  } else {
    myClass = "pr-2 border-r-2 border-blue-800";
  }

  return <div className={myClass}>{children}</div>;
};

export default TechContainer;
