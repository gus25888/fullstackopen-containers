db.createUser({
  user: 'new_username',
  pwd: 'new_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'todos_database',
    },
  ],
});

db.createCollection('todos');