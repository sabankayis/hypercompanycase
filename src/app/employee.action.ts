import { createAction, props } from "@ngrx/store";
import { EmployeeModel } from "./models/employee.model";

export const addEmployee = createAction(
    "[Employees] add employee",
    props<{employee:EmployeeModel}>()
)