function Text({
  children,
  className,
  ...rest
}) {
  const extClassName = [
    "card-text",
    className,
  ].filter(Boolean).join(" ");

  return (
    <p { ...rest } className={ extClassName }>{ children }</p>
  );
}

export default Text;
