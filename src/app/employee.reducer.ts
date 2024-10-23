import { createReducer, on } from "@ngrx/store";
import { EmployeeModel } from "./models/employee.model";
import { addEmployee } from "./employee.action";

export const  initialState:EmployeeModel[] = [];

export const employeeReducer = createReducer(
    initialState,
    on(addEmployee,(state,{employee})=>{
        //işlemler
        return [...state,employee];
    })
)
