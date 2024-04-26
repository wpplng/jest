const login = require('./login');

describe('login', () => {
  it('should return true if username is admin and password is password123', () => {
    expect(login('admin', 'password123')).toBeTruthy();
  });

  it('should return false if username is incorrect', () => {
    expect(login('user', 'password123')).toBeFalsy();
  });

  it('should not return true if password is incorrect', () => {
    expect(login('admin', 'password')).not.toBeTruthy();
  });
});
