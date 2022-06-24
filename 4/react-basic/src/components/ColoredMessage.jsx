export const ColoredMessage = (props) => {
  // Props를 분할 대입
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px",
  };

  return <p style={contentStyle}>{children}</p>;
};
