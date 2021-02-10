import React from 'react';

const User = React.memo(({ user }) => {

  const adress = `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`
  const company = `${user.company.name} (catchPhrase: ${user.company.catchPhrase}, bs: ${user.company.bs})`

  return (
    <li className="user-item">
      <p className="user-item__text">
        <span className="user-item__text-appellation">Имя: </span>{user.name}
      </p>
      <p className="user-item__text">
        <span className="user-item__text-appellation">Ник: </span>{user.username}
      </p>
      <p className="user-item__text">
        <span className="user-item__text-appellation">E-mail: </span>{user.email}
      </p>
      <p className="user-item__text">
        <span className="user-item__text-appellation">Адрес: </span>{adress}
      </p>
      <p className="user-item__text">
        <span className="user-item__text-appellation">Номер телефона: </span>{user.phone}
      </p>
      <p className="user-item__text">
        <span className="user-item__text-appellation">Веб-сайт: </span>{user.website}
      </p> 
      <p className="user-item__text">
        <span className="user-item__text-appellation">Компания: </span>{company}
      </p>
    </li>
  )
})

export default User;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },