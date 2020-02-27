import { Employee } from '../model/employee-model';
import { Injectable } from '@angular/core';
@Injectable()
export class Adapter {
    getAdapt(employee: any): Employee {
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
