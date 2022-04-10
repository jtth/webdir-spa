import {Component} from '@angular/core';

interface Name {
  first: string;
  last: string;
  title?: string;
}

interface Picture {
  large?: string;
  medium?: string;
  thumbnail?: string
}

interface Employee {
  name: Name;
  picture?: Picture;
  email: string;
  department: string;
  phone: string;
  id: number;
}

interface EmployeesList {
  employees: Employee[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee List-o-matic';
  testEmployeesList: EmployeesList = {
    "employees": [
      {
        "name": {
          "first": "Lawrence",
          "last": "Green",
          "title": "Mr"
        },
        "email": "lawrence.green@example.com",
        "phone": "00-5297-8396",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/33.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
        },
        "department": "Legal",
        "id": 65
      },
      {
        "name": {
          "first": "Alice",
          "last": "Pelletier",
          "title": "Miss"
        },
        "email": "alice.pelletier@example.com",
        "phone": "460-927-9512",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/81.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/81.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/81.jpg"
        },
        "department": "HR",
        "id": 70
      },
      {
        "name": {
          "first": "Villemo",
          "last": "Sekkingstad",
          "title": "Miss"
        },
        "email": "villemo.sekkingstad@example.com",
        "phone": "63227343",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/7.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
        },
        "department": "Legal",
        "id": 62
      },
      {
        "name": {
          "first": "Branko",
          "last": "Neuberger",
          "title": "Mr"
        },
        "email": "branko.neuberger@example.com",
        "phone": "0462-3550319",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/22.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
        },
        "department": "HR",
        "id": 74
      },
      {
        "name": {
          "first": "ملینا",
          "last": "حیدری",
          "title": "Miss"
        },
        "email": "mlyn.hydry@example.com",
        "phone": "079-65159391",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/22.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
        },
        "department": "Legal",
        "id": 7
      }]
  };
}
