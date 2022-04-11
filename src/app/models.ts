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
  id?: number;
}

export interface EmployeeWithId {
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

export class NameForm {
  first: string = '';
  last: string = '';
  title?: string = '';
}

export class PictureForm {
  large?: string = '';
  medium?: string = '';
  thumbnail?: string = '';
}

export class EmployeeForm {
  name: Name = new NameForm();
  picture?: Picture = new PictureForm();
  email: string = '';
  department: string = '';
  phone: string = '';
  id?: number;
}
