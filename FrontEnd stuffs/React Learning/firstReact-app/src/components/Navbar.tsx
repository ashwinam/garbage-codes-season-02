interface Props {
  cartItemCount: number;
}

const Navbar = ({ cartItemCount }: Props) => {
  return <div>Cart: {cartItemCount}</div>;
};

export default Navbar;
