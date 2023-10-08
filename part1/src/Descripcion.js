const Description = (props) => {

  const { color, newTitle, message } = props;

  return (
    <p style={{color}}>
       {newTitle}
       {message}
    </p>
  );
};

export default Description;