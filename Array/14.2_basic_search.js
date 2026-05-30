const users = [
  { id: 1, name: "Sumit", role: "admin", active: true },
  { id: 2, name: "Amit", role: "user", active: false },
  { id: 3, name: "Rahul", role: "editor", active: true },
  { id: 4, name: "Sita", role: "user", active: true }
];
// searchTerm should match name or role
// selectedRole can be "all", "admin", "user", or "editor"
// activeOnly is boolean
// if activeOnly is true, return only active users
// if activeOnly is false, return active and inactive users

const filterUsers = (users, searchTerm, selectedRole, activeOnly) => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  return users.filter((user) => {
    const name = user.name.toLowerCase();
    const role = user.role.toLowerCase();

    const matchesSearch =
      name.includes(normalizedSearchTerm) || role.includes(normalizedSearchTerm);

    const matchesRole =
      selectedRole === "all" || user.role === selectedRole;

    const matchesActive =
      activeOnly === false || user.active === true;

    return matchesSearch && matchesRole && matchesActive;
  });
}