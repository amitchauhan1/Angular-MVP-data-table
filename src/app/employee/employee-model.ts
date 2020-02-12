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
class Address {
    city: string;
    zip: number;
}
