const login = (username, password) => {
  if (username === 'admin' && password === 'password123') {
    return { message: 'Inloggningen lyckades', loginSuccessful: true };
  } else if (!username || !password || username === '' || password === '') {
    return { message: 'Felaktig input', loginSuccessful: false };
  }
  return {
    message: 'Felaktigt användarnamn eller lösenord',
    loginSuccessful: false,
  };
};

module.exports = login;
