
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function Text(){

    const editorStyle = {
        backgroundColor: "white",
        padding: "50px 80px",
        height:"100vh"
      }

    return(
        <div className="text-editor">
          <Editor editorStyle={editorStyle}/>
        </div>
    )
}
export default Text;