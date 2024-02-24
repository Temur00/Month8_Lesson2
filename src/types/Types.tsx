import { NewNote } from "./NewNote";

export type NoteData = {
  title: string;
  markDown: string;
  tags: Tag[];
};

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
  // markDown: string;
  // tags: Tag[];
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markDown: string;
  tagIds: string[];
};

export type Tag = {
  id: string;
  label: string;
};

export type NoteFormProps = {
  onsubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};
