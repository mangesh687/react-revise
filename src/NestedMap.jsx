function NestedMap({ college }) {
  return (
    <div>
      <h1>Nested 1</h1>

      {college.map((college, index) => (
        <div
          key={index}
          style={{ border: "2px solid", margin: "10px", padding: "10px" }}
        >
          <h2>College Name: {college.college}</h2>
          <h3>Degree: {college.degree}</h3>
          <h3>Branch: {college.branch}</h3>

          <h3>Students:</h3>

          {college.students.map((student, idx) => (
            <div
              key={idx}
              style={{ border: "1px solid", margin: "5px", padding: "5px" }}
            >
              <p>Name: {student.student}</p>
              <p>Age: {student.age}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default NestedMap;
