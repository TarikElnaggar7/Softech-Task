export interface OrdersInterface {
  OrderId: number;
  OrderDate: string;
  UserId: string;
  Products: OrderedProduct[];
  PaymentType: PaymentType;
}

export interface OrderedProduct {
  ProductId: number;
  Quantity: number;
}

export enum PaymentType {
  online = 'Online',
  Cash = 'Cash On Delivery',
}
