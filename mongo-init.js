db.createUser({
  user: "paiman",
  pwd: "paiman",
  roles: [
    {
      role: "readWrite",
      db: "paiman",
    },
  ],
});
