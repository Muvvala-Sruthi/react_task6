import React from "react";
function Skills() {
  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center", 
    width: "100%",
  };
  const rowStyle = {
    display: "flex",
    justifyContent: "center", 
    margin: "5px 0", 
  };
  const imageStyle = {
    width: "150px",
    height: "auto",
    margin: "5px",     
  };
  return (    
      <div style={imageContainerStyle}>
      <h1 style={{fontSize: "50px",color:"black"}}>Skills</h1>
        <div style={rowStyle}>         
          <img
            src="https://freepngimg.com/thumb/java/85390-java-language-text-programming-logo-programmer.png"
            alt="java"
            style={imageStyle}
          />
          <img
            src="https://www.python.org/static/community_logos/python-logo-master-v3-TM.png"
            alt="python"
            style={imageStyle}
          />
        </div>
        <div style={rowStyle}>
          <img
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220630132824/HTML-Full-Form.jpg"
            alt="HTML"
            style={imageStyle}
          />
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/293/677/small/creative-trendy-css-letters-logo-icon-design-template-illustration-vector.jpg"
            alt="css"
            style={imageStyle}
          />
        </div>
        <div style={rowStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EZPGOhEaymNoZfB6IvQcck9HdmTuoswfJw&usqp=CAU"
            alt="javascript"
            style={imageStyle}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnO0xHQrNDbCdgefmnjSjUPAMIKBx2F-NOww&usqp=CAU"
            alt="mysql"
            style={imageStyle}
          />
        </div>
      </div> 
  );
}
export default Skills;
