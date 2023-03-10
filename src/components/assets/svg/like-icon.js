const LikeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={props.color ? props.color : "#ffffff"}
    style={{
      enableBackground: "new 0 0 16 16",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M8.612 2.347 8 2.997l-.612-.65c-1.69-1.795-4.43-1.795-6.12 0-1.69 1.795-1.69 4.706 0 6.502l.612.65L8 16l6.12-6.502.612-.65c1.69-1.795 1.69-4.706 0-6.502-1.69-1.795-4.43-1.795-6.12.001z" />
  </svg>
);

export default LikeIcon;
