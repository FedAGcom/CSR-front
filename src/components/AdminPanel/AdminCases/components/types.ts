export type TItem = {
  id: string;
  type: string;
  title: string;
  skin: string;
  rare: string;
  quality: string;
  winchance: number;
}

export type TCase = {
  id: number,
  title: string,
  price: number,
  items: any[]
}

export type TEditableCase = {
  id: number,
  title: string,
  price: number,
  packItemsId?: any[],
  items?: any[]
}