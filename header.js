import document from "./Images/google-docs.png"
import downArrow from "./Images/down-arrow.png"
import message from "./Images/comment.png"
import star from "./Images/star.png"
import video from "./Images/cam.png"
import lock from "./Images/padlock.png"
import personal from "./Images/personal.jpeg"
import { useState } from "react"
function Header(){
      
    const [inputValue, setInputValue] = useState('Untitled Document');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const getInputWidth = () => {
    return inputValue.length * 13   ;
  }

    return(
        <div className="main-head">
        <div className="document">
            <img src={document} width="50px"/>
            <div>
                <div className="input">
                <input 
                    className="focus"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ width: getInputWidth() }}
                 />
                    <img src={star} width="20px"/>
                </div>
                <div className="toolbar">
                    <ul>
                        <li>File</li>
                        <li>Edit</li>
                        <li>View</li>
                        <li>Insert</li>
                        <li>Format</li>
                        <li>Tools</li>
                        <li>Extensions</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>

          <div className="end-head">
              <div className="msg"><img src={message} width="30px"/></div>

              <div className="cam">
                   <img src={video} width="35px"/>
                   <img src={downArrow} width="10px"/>
              </div>

              <div className="btn">
                 <button><img src={lock} width="20px"/>share</button>
              </div>

              <div><img src={personal} width="50px" className="personal-img"/></div>
          </div>
        </div>
    )
}
export default Header