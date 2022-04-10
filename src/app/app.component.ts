import { Component } from '@angular/core';
import { EmployeesList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Employee List-o-matic';
  testEmployeesList: EmployeesList = {
    employees: [
      {
        name: {
          first: 'Lawrence',
          last: 'Green',
          title: 'Mr',
        },
        email: 'lawrence.green@example.com',
        phone: '00-5297-8396',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/33.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/33.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/33.jpg',
        },
        department: 'Legal',
        id: 65,
      },
      {
        name: {
          first: 'Alice',
          last: 'Pelletier',
          title: 'Miss',
        },
        email: 'alice.pelletier@example.com',
        phone: '460-927-9512',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/81.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg',
        },
        department: 'HR',
        id: 70,
      },
      {
        name: {
          first: 'Villemo',
          last: 'Sekkingstad',
          title: 'Miss',
        },
        email: 'villemo.sekkingstad@example.com',
        phone: '63227343',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/7.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        },
        department: 'Legal',
        id: 62,
      },
      {
        name: {
          first: 'Branko',
          last: 'Neuberger',
          title: 'Mr',
        },
        email: 'branko.neuberger@example.com',
        phone: '0462-3550319',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/22.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/22.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
        },
        department: 'HR',
        id: 74,
      },
      {
        name: {
          first: 'ملینا',
          last: 'حیدری',
          title: 'Miss',
        },
        email: 'mlyn.hydry@example.com',
        phone: '079-65159391',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/22.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/22.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
        },
        department: 'Legal',
        id: 7,
      },
      {
        name: {
          first: 'Elisa',
          last: 'Diez',
          title: 'Ms',
        },
        email: 'elisa.diez@example.com',
        phone: '982-742-196',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/25.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/25.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/25.jpg',
        },
        department: 'Engineering',
        id: 58,
      },
      {
        name: {
          first: 'Vidar',
          last: 'Hellebust',
          title: 'Mr',
        },
        email: 'vidar.hellebust@example.com',
        phone: '81887723',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/40.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/40.jpg',
        },
        department: 'Engineering',
        id: 60,
      },
      {
        name: {
          first: 'Faith',
          last: 'May',
          title: 'Mrs',
        },
        email: 'faith.may@example.com',
        phone: '0117860 736 6452',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/90.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/90.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/90.jpg',
        },
        department: 'Engineering',
        id: 27,
      },
      {
        name: {
          first: 'Lydia',
          last: 'Brooks',
          title: 'Ms',
        },
        email: 'lydia.brooks@example.com',
        phone: '(257)-666-4912',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/10.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/10.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/10.jpg',
        },
        department: 'HR',
        id: 1,
      },
      {
        name: {
          first: 'Borja',
          last: 'Perez',
          title: 'Mr',
        },
        email: 'borja.perez@example.com',
        phone: '941-565-765',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/95.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/95.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/95.jpg',
        },
        department: 'Marketing',
        id: 69,
      },
      {
        name: {
          first: 'Elian',
          last: 'Verschure',
          title: 'Miss',
        },
        email: 'elian.verschure@example.com',
        phone: '(164)-504-0396',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/64.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/64.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/64.jpg',
        },
        department: 'Marketing',
        id: 24,
      },
      {
        name: {
          first: 'Lee',
          last: 'Woods',
          title: 'Mr',
        },
        email: 'lee.woods@example.com',
        phone: '015395 34767',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/92.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/92.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/92.jpg',
        },
        department: 'Marketing',
        id: 55,
      },
      {
        name: {
          first: 'Claire',
          last: 'Rose',
          title: 'Miss',
        },
        email: 'claire.rose@example.com',
        phone: '061-699-0740',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/15.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/15.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/15.jpg',
        },
        department: 'Legal',
        id: 85,
      },
      {
        name: {
          first: 'Théo',
          last: 'Schmitt',
          title: 'Mr',
        },
        email: 'theo.schmitt@example.com',
        phone: '01-83-77-51-63',
        picture: {
          large: 'https://randomuser.me/api/portraits/men/67.jpg',
          medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg',
        },
        department: 'Marketing',
        id: 39,
      },
      {
        name: {
          first: 'Nicole',
          last: 'Knight',
          title: 'Miss',
        },
        email: 'nicole.knight@example.com',
        phone: '031-316-5804',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/36.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/36.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/36.jpg',
        },
        department: 'HR',
        id: 88,
      },
      {
        name: {
          first: 'Rosl',
          last: 'Karsten',
          title: 'Ms',
        },
        email: 'rosl.karsten@example.com',
        phone: '0333-8533028',
        picture: {
          large: 'https://randomuser.me/api/portraits/women/7.jpg',
          medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
          thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
        },
        department: 'Engineering',
        id: 46,
      },
    ],
  };
}
