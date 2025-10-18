import Note from "../models/Note.js";

export async function getAllNotes(req,res) {
    try{
        const notes=await Note.find().sort({createdAt: -1});
    res.status(200).json({
  message: "You fetched notes",
  data: notes
});

}
    catch(error){
        console.log("Error in fetching notes",error);
        res.status(500).json({message:"Internal server error"});
    }


}

export async function getNoteById(req,res){
    try {
        const note=await Note.findById(req.params.id);
        if(!note) return res.status(404).json({message:"Notes not found!"});
        res.json(note);
        
    } catch (error) {
        console.log("Error in fetching notes",error);
        res.status(500).json({message:"Internal server error"});

        
    }
}


export async function createAllNotes(req,res){

    try{
        const{title,content}=req.body;

        if (!title||!content){
            return res.status(400).json({ message: "Title and content are required" });
        }
        const newNote=new Note({title,content});

        const savedNote=await newNote.save();
        res.status(201).json(savedNote);


    }
    catch(error){
        console.error("Error in createnote controller",error);
        res.status(500).json({message:"Internal server error"});

    }
   

}

export async function UpdateAllNotes(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note updated successfully", updatedNote });
  } catch (error) {
    console.error("Error in UpdateAllNotes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function DeleteAllNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteNote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
