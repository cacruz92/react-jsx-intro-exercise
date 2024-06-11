const Person = ({name, age, hobbies}) => {
  let reply;
  if (age > 18) {
    reply = "Please go Vote!";
  } else {
    reply = "You must be 18.";
  }

  const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <h3>{reply}</h3>

      <ul>
        {hobbiesLIs}
      </ul>
    </div>
  );
};
