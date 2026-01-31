function ReuseComponent({name1}) {
  return (
    <>
     <h1>hello {name1.name}</h1>
     <h2>Age: {name1.age}</h2>
     <h2>City: {name1.city}</h2>

    </>
  );
}
export default ReuseComponent;