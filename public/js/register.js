//still testing code not complete

// const createFormHandler = async (event) => {
//   event.preventDefault()

//   const email = document.querySelector('#email-create').value.trim()
//   const password = document.querySelector('#password-create').value.trim()

//   if (email && password) {
//     const response = await fetch('api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-type': 'application/json'}
//     })

//     if (response.ok) {
//       document.location.replace('/')
//     } else {
//       alert('Failed to create account, please try again')
//     }
//   }
// }

// document
//   .querySelector('.create-form')
//   .addEventListener('submit', createFormHandler)