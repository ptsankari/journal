import React,{useState} from "react";
import user from "../components/icon.jpg";
import bin from "../components/bin.jpg";
import edit5 from "../components/edit5.jpg.png";

const Display=({value, onDelete, onSave})=>{
        const{id,feel,text,date}=value;
        const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedFeel, setEditedFeel] = useState(feel);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
onSave(id, editedFeel, editedText);
  };
    return(
        <div>
       <div className="container2">
        <div className="item">
            <img className="ui image" src={user} alt="user" style={{width:"50px"}}/>
        <div className="content">
            <div><b>{date}</b></div>
            {isEditing ? (
          <>
            <input className="edittext"
              type="text" 
              value={editedFeel} 
              onChange={(e) => setEditedFeel(e.target.value)} 
            />
            <br/>
            <br/>
            <textarea className="edittextarea"
              value={editedText} 
              onChange={(e) => setEditedText(e.target.value)} 
            />
            <br/>
            <button onClick={handleSave} className="savebutton">Update</button>
          </>
        ) : (
          <>

            <div>{feel}</div>
           <div>{text}</div>
           </>)}
        </div>
        <div className="itemss">
         <img src={edit5} className="editimg" alt="edit" onClick={toggleEdit}></img>
        <img src={bin} className="binimg" alt="bin" onClick={onDelete} />
        </div>
</div>
    
 </div>
    </div>
    
    );
};
export default Display;