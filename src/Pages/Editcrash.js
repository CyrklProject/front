// import './Edit.css';
// import React from 'react';
// import { CategorieTitle, EditContainer, AvatarMenu } from './Edit.style';
// import { Avatar } from '../components/Avatar/Avatar';
// import { useState } from 'react';
// import { Button } from '../components/Button/Button';

// export default function Edit() {
//   const [id, setId] = useState();
//   const [lastname, setlastname] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [position, setPosition] = useState('');
//   const [urlphoto, seturlphoto] = useState('');
//   const [positionsought, setPositionsought] = useState('');
//   const [industry, setIndustry] = useState('');
//   const [industrysought, setIndustrysought] = useState('');
//   const [password, setPassword] = useState('');
//   const [createdAt, setCreatedAt] = useState('');
//   const [updatedAt, setUpdatedAt] = useState('');

//   console.log(urlphoto, id, createdAt, updatedAt);

//   function handleChangeLastname(e) {
//     setlastname(e.target.value);
//   }

//   function handleChangeName(e) {
//     setName(e.target.value);
//   }

//   function handleChangeEmail(e) {
//     setEmail(e.target.value);
//   }

//   function handleChangeTelephone(e) {
//     setTelephone(e.target.value);
//   }

//   function handleChangePosition(e) {
//     setPosition(e.target.value);
//   }

//   function handleChangePositionSought(e) {
//     setPositionsought(e.target.value);
//   }

//   function handleChangeIndustry(e) {
//     setIndustry(e.target.value);
//   }

//   function handleChangeIndustrySought(e) {
//     setIndustrysought(e.target.value);
//   }

//   function handleChangePassword(e) {
//     setPassword(e.target.value);
//   }

//   const fetchUsersData = () => {
//     fetch('http://188.165.238.74:8080/usersG')
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const userEmail = sessionStorage.getItem('email');
//         const allUsers = data;
//         const user = allUsers.find((user) => user.email === userEmail);
//         if (user) {
//           const userId = user.id;
//           console.log(`User with email ${userEmail} has ID ${userId}`);

//           fetch(`http://188.165.238.74:8080/users/${userId}`)
//             .then((response) => {
//               return response.json();
//             })
//             .then((data) => {
//               console.log(data);
//               setId(data.id);
//               setlastname(data.lastname);
//               setName(data.name);
//               setEmail(data.email);
//               setTelephone(data.telephone);
//               setPosition(data.position);
//               setPositionsought(data.positionsought);
//               setIndustry(data.industry);
//               setIndustrysought(data.industrysought);
//               setPassword(data.password);
//               setCreatedAt(data.createdAt);
//               setUpdatedAt(data.updatedAt);
//               seturlphoto(data.urlphoto);
//             })
//             .catch((error) => {
//               console.error('Error:', error);
//             });
//         } else {
//           console.log(`No user found with email ${userEmail}`);
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };
//   fetchUsersData();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetchUsersData();
//   };

//   return (
//     <EditContainer>
//       <CategorieTitle>Mon Profil</CategorieTitle>
//       <AvatarMenu>
//         <Avatar></Avatar>
//         <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
//           Modifier
//         </Button>
//         <Button type="button" buttonStyle="btn--primary--reverse" buttonSize="btn--small">
//           Supprimer
//         </Button>
//       </AvatarMenu>
//       <Button
//         onClick={handleSubmit}
//         type="button"
//         buttonStyle="btn--primary--solid"
//         buttonSize="btn--medium">
//         ENREGISTRER
//       </Button>
//       <form>
//         <input
//           onChange={handleChangeName}
//           className="input"
//           value={name}
//           type="text"
//           placeholder="Prénom"
//         />
//         <input type="text" id="lastname" value={lastname} onChange={handleChangeLastname} />

//         <input
//           onChange={handleChangeEmail}
//           className="input"
//           value={email}
//           type="text"
//           placeholder="Email"
//         />
//         <input
//           onChange={handleChangeTelephone}
//           className="input"
//           value={telephone}
//           type="text"
//           placeholder="Telephone"
//         />
//         <input
//           onChange={handleChangePassword}
//           className="input"
//           value={password}
//           type="text"
//           placeholder="Password"
//         />
//         <input
//           onChange={handleChangeIndustry}
//           className="input"
//           value={industry}
//           type="text"
//           placeholder="Secteur"
//         />
//         <input
//           onChange={handleChangeIndustrySought}
//           className="input"
//           value={industrysought}
//           type="text"
//           placeholder="Secteur recherche"
//         />
//         <input
//           onChange={handleChangePositionSought}
//           className="input"
//           value={positionsought}
//           type="text"
//           placeholder="Titre recherche"
//         />
//         <input
//           onChange={handleChangePosition}
//           className="input"
//           value={position}
//           type="text"
//           placeholder="Titre profil"
//         />
//       </form>
//     </EditContainer>
//   );
// }
