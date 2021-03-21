export type ListItemType = {
  id: number;
  title: string;
  author: "Me";
};

export type ListType = Array<ListItemType>;

export type ErrorType = string | null;
