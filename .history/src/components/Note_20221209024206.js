const Note = ({ props }) => {
  return (
    <div className="props">
      {props.map((prop) => (
        <div className="note">
          <h1>{prop.title}</h1>
          <p>{prop.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
