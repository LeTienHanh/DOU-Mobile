class User {}

User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    token: {type: 'string'},
    name: {type: 'string'},
    isAdmin: {type: 'bool'},
    fullname: {type: 'string'},
    department: {type: 'string'},
    address: {type: 'string'},
    city: {type: 'string'},
    province: {type: 'string'},
  }
};

export default User;
