import { login, logout } from "../../actions/auth";

  test('should log in', () => {
    const uid = '123abc'
    const action = login(uid);
     expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
  });

test('should log out', () => {
    const action = logout();
    expect(action).toEqual({
    type: 'LOGOUT'    
    });
 });  