export function Usercard({ users }) {
  return (
    <div>
      <h3>User Name: {users.name}</h3>
      <p>Role: {users.role}</p>
      <p>Country: {users.country}</p>
    </div>
  );
}