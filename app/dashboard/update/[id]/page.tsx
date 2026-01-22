import connectToDB from "@/utlis/DB";
import Notes from "@/models/notes";
import EditNoteForm from "./EditNoteForm";

const UpdateNotePage = async ({
  params
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  await connectToDB();

  const noteDoc = await Notes.findById(id).lean();

  if (!noteDoc) {
    return <div>Note not found</div>;
  }

  // Serializable object for client component
  const note = {
    _id: noteDoc._id.toString(),
    title: noteDoc.title,
    content: noteDoc.content,
  };

  return (
    <div>
      <EditNoteForm note={note} />
    </div>
  )
}

export default UpdateNotePage;