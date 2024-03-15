interface User {
    id: number;
    name: string;
    email: string;
    password: string; // hashed password
    shippingAddress: Address;
    billingAddress: Address;
    role: UserRole;
  }