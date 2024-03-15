interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string; // hashed password
    shippingAddress: Address;
    billingAddress: Address;
    role: UserRole;
  }