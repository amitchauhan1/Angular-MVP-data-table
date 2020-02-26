import { Adapter } from './employee-adapter';
import { Injectable } from '@angular/core';
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

@Injectable()
export class EmployeeAdapter implements Adapter<Employee> {
    adapt(employee: any): Employee {
        return new Employee(
            employee.id,
            employee.Name,
            employee.email,
            employee.mobile,
            employee.gender,
            employee.address,
            employee.department,
            new Date(employee.hiredate),
            employee.permanent,
        );
    }
}

