import Button from "../atoms/button";
import CartIcon from "./cart-icon";

const CartButton: React.FC = () => {
  return (
    <Button onClick={() => {}} aria-label="Open cart" data-testid="open-cart">
      <div className="relative">
        <CartIcon />
      </div>
    </Button>
  )
};

export default CartButton;
