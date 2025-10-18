import { Link } from "react-router-dom";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import api from "../lib/axios";
import toast from "react-hot-toast";



const NoteCard = ({note,setNotes}) => {

  const handleDelete=async(e,id)=>{
    e.preventDefault(); //get rid of navigation behaviour
    if(!window.confirm("Are you sure u want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev)=>prev.filter(note=>note._id!==id))
      toast.success("Note deleted successfully");
      
    } catch (error) {
      console.log("error in deleting notes",error);
      toast.error("Failed to delete note");
      
    }

  }




   if (!note) return null;
    let createdDate = "Unknown date";
  if (note.createdAt) {
    const d = new Date(note.createdAt);
    if (!isNaN(d)) {
      createdDate = d.toLocaleString();
    }
  }
  return (
    <Link
    
    to={`/note/${note._id}`}
    className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#008cff]" >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <p className="text-xs text-gray-500 mt-2">Created: {createdDate}</p>
        
        <div className="card-actions justify-between items-center mt-4">
         <PenSquareIcon className="size-4"/>
         <button className="btn btn-ghost btn-xs text-error" onClick={(e)=>handleDelete(e,note._id)}>
          <Trash2Icon className="size-4"/>
          

         </button>

        </div>

      </div>
 </Link>
  )
}

export default NoteCard