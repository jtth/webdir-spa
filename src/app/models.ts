export interface Name {
  first: string;
  last: string;
  title?: string;
}
export interface Picture {
  large?: string;
  medium?: string;
  thumbnail?: string;
}

export interface Employee {
  name: Name;
  picture?: Picture;
  email: string;
  department: string;
  phone: string;
  id: number;
}

export interface EmployeesList {
  employees: Employee[];
}
