const Box = (props) => {
  const { className, boxText } = props;
  const containerClassName = `container ${className}`;
  return (
    <div className={containerClassName}>
      <div className={className}>
        <div>
          <p>{boxText}</p>
        </div>
      </div>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1>Boxes</h1>
    <div className="box-container">
      <div>
        <Box className="yellow" boxText="small" />
      </div>
      <div>
        <Box className="blue" boxText="medium" />
      </div>
      <div>
        <Box className="pink" boxText="large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
