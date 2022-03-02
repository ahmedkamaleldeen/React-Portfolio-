function ShowCards(props) {
  return (
    <>
      {props.Projects.map((project) => {
        return (
          <div className="col-4 p-5">
            <div className="d-flex justify-content-center align-items-center"
              style={{
                width: "300px",
                height: "300px",
                border: "4px solid black",
                backgroundColor:"aqua"
              }}
            >
              <h1>{project}</h1>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ShowCards;
