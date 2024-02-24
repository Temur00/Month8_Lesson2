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
  markdown: string;
} & Partial<NoteData>;

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export type NoteListProps = {
  availableTags: Tag[];
  notes: SimplefiedNote[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};

export type SimplefiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};

export type NoteLayoutProps = {
  notes: Note[];
};

export type NoteProps = {
  onDelete: (id: string) => void;
};

export type EditTagsModalProps = {
  show: boolean;
  availableTags: Tag[];
  handleClose: () => void;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
};
