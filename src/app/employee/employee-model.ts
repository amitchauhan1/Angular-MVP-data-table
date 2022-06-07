export class Employee {
    id: number;
    name: string;
    email: string;
    mobile: number;
    gender: string;
    address: Array<Address>;
    department: string;
    hiredate: Date;
    permanent: boolean;
}
export class Address {
    city: string;
    zip: number;
}

export class Sort {
    field: string;
    order: string;
}

