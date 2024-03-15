
interface Order {
    id: number;
    orderItems: OrderItem[];
    totalAmount: number;
    shippingAddress: Address;
    createdAt: Date;
  }