import { Injectable } from '@angular/core';
import { HttpEmployee } from '../model/http-employee-model';

@Injectable()
export class HttpAdapter {
    setAdapt(employee: any): HttpEmployee {
        return new HttpEmployee(
            employee.id,
            employee.name,
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
