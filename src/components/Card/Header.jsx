function Header({
  children,
  className,
  ...rest
}) {
  const extClassName = [
    "card-header",
    className
  ].filter(Boolean).join(" ");

  return (
    <div { ...rest } className={ extClassName }>{ children }</div>
  );
}

export default Header;
