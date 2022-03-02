function ShowCards(props) {
  return (
    <>
      {props.Projects.map((project,index) => {
          if(index%2===0){
        return (
          <div className="col-4 p-5">
            <div className="d-flex justify-content-center align-items-center"
              style={{
                width: "400px",
                height: "300px",
                border: "4px solid black",
                backgroundColor:"aqua",
              }}
            >
                
              <h1 style={{borderBottom:"4px solid black",padding:"20px"}}>{project}</h1>
            </div>
          </div>
        );}else {
            return(
            <div className="col-4 p-5">
            <div className="d-flex justify-content-center align-items-center"
              style={{
                width: "400px",
                height: "300px",
                border: "4px solid black",
                backgroundColor:"red",
              }}
            >
                
              <h1 style={{borderBottom:"4px solid black",padding:"20px"}}>{project}</h1>
            </div>
          </div>
            );

        }
      })}
    </>
  );
}
export default ShowCards;
