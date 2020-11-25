function Title({
  children,
  className,
  ...rest
}) {
  const extClassName = [
    "card-title",
    className,
  ].filter(Boolean).join(" ");

  return (
    <h5 { ...rest } className={ extClassName }>{ children }</h5>
  );
}

export default Title;
