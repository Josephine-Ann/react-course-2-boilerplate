import authReducer from '../../reducers/auth';

test('should login', () => {
    const uid = '123abc'
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(uid);
});

test('should logout', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: 'lo k sea'}, action);
    expect(state).toEqual({});
});
