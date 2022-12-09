const Note = ({ props }) => {
  return (
    <div className="props">
      {props.map((prop) => (
        <div className="note">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Note;
