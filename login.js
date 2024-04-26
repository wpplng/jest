const login = (username, password) => {
  if (username === 'admin' && password === 'password123') {
    return true;
  }
  return false;
};

module.exports = login;
