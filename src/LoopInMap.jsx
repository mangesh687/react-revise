function LoopInMap() {
  const userNames = ["rahul", "Mangesh", "Rohit", "Sanket", "Amol", "Ajinkya"];
  const userObjects = [
    {
      name: "rahul",
      age: 25,
      email: "rahul@gmail.com",
      id: 1,
    },
    {
      name: "Mangesh",
      age: 26,
      email: "mangesh@gmail.com",
      id: 2,
    },
    {
      name: "Rohit",
      age: 27,
      email: "rohit@gmail.com",
      id: 3,
    },
    {
      name: "Sanket",
      age: 28,
      email: "sanket@gmail.com",
      id: 4,
    },
    {
      name: "Amol",
      age: 29,
      email: "amol@gmail.com",
      id: 5,
    },
    {
      name: "Ajinkya",
      age: 30,
      email: "ajinkya@gmail.com",
      id: 6,
    },
  ];
  return (
    <>
      <h1>Loop in JSX with Map Function</h1>
      <table border="1"> 
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userObjects.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      
    </>
  );
}
export default LoopInMap;
