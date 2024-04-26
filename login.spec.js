const login = require('./login');

describe('login', () => {
  it('should return true if username is admin and password is password123', () => {
    expect(login('admin', 'password123').loginSuccessful).toBeTruthy();
  });

  it('should return false if username is incorrect', () => {
    expect(login('user', 'password123').loginSuccessful).toBeFalsy();
  });

  it('should not return true if password is incorrect', () => {
    expect(login('admin', 'password').loginSuccessful).not.toBeTruthy();
  });

  it('should return error message if password is incorrect', () => {
    expect(login('admin', 'password').message).toBe(
      'Felaktigt användarnamn eller lösenord'
    );
  });

  it('should return error message if username is incorrect', () => {
    expect(login('user', 'password123').message).toBe(
      'Felaktigt användarnamn eller lösenord'
    );
  });

  it('should return error message and false if username and password is incorrect', () => {
    expect(login('user', 'password')).toEqual({
      message: 'Felaktigt användarnamn eller lösenord',
      loginSuccessful: false,
    });
  });

  it('should return Felaktig input and false if any input is empty string', () => {
    expect(login('', 'password123').loginSuccessful).toBeFalsy();
    expect(login('admin', '').loginSuccessful).toBeFalsy();
    expect(login('', 'password123').message).toBe('Felaktig input');
    expect(login('admin', '').message).toBe('Felaktig input');
    expect(login('', '')).toEqual({
      message: 'Felaktig input',
      loginSuccessful: false,
    });
  });

  it('should return Felaktig input and false if any input is null', () => {
    expect(login('password123').loginSuccessful).toBeFalsy();
    expect(login('admin').loginSuccessful).toBeFalsy();
    expect(login(null, 'password123').message).toBe('Felaktig input');
    expect(login('admin', null).message).toBe('Felaktig input');
    expect(login()).toEqual({
      message: 'Felaktig input',
      loginSuccessful: false,
    });
  });
});
