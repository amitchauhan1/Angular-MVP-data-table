export class Employee {
    constructor(
       public id: number,
       public name: string,
       public email: string,
       public mobile: number,
       public gender: string,
       public address: Array<Address>,
       public department: string,
       public hiredate: Date,
       public permanent: boolean
    ) { }
}
class Address {
    city: string;
    zip: number;
}

export class Sort {
    field: string;
    order: string;
}
