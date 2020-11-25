function Body({
  children,
  className,
  ...rest
}) {
  const extClassName = [
    "card-body",
    className,
  ].filter(Boolean).join(" ");

  return (
    <div { ...rest } className={ extClassName }>{ children }</div>
  );
}

export default Body;
