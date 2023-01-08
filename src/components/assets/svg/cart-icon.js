const CartIcon = (props) => (
  <svg
    id="Icons"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 32 32"
    style={{
      enableBackground: "new 0 0 32 32",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st1{fill:none;stroke:#000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10}"
      }
    </style>
    <path className="st1" d="M11 19 6.4 4.5C6.2 3.6 5.3 3 4.4 3H2" />
    <path
      className="st1"
      d="M26 23H8.4c-1.1 0-2-.9-2-2s.9-1.8 2-2L29 16V6H11"
    />
    <circle className="st1" cx={11} cy={28} r={1} />
    <circle className="st1" cx={24} cy={28} r={1} />
  </svg>
);

export default CartIcon;
