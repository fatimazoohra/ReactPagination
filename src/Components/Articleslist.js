
import React from "react";
import contents from './ArticlesContents.js';


class articleslist extends React.Component {
  state = {};

  render() {
    return(
     <div>
      {contents.map((elem) =>{
        <h3>{elem.title}</h3>
        <p>{elem.paragraphes[0].substring(0,100)} </p>
       ) }
      }  
     </div>
     );
  }
}
export default articleslist;