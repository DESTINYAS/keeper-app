const Note = ({props}) => {
  return (
  {props.map((prop) => (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  ))}
  );
};

export default Note;
