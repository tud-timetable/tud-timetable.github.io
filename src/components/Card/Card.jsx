function Card({
  children,
  className,
  ...rest
}) {
  const extClassName = [
    "card",
    className
  ].filter(Boolean).join(" ");

  return (
    <div { ...rest } className={ extClassName }>{ children }</div>
  );
}

export default Card;
