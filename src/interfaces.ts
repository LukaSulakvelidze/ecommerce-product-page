export interface Header_props {
  item_quantity: boolean;
  quantity: number;
  cartIcon_onClick: () => void;
}

export interface Main_props {
  show: boolean;
  quantity: number;
  deleteItem: () => void;
  checkoutClick: () => void;
  decreament: () => void;
  count: number;
  increment: () => void;
  addCart: () => void;
}
export interface Shopping_cart_props {
  quantity: number;
  deleteItem: () => void;
  checkoutClick: () => void;
}
