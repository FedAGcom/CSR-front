export type TItem = {
  id: string;
  type: string;
  title: string;
  skin: string;
  rare: string;
  quality: string;
  winchance: number;
};

export type TItemFromBack = {
  id: string;
  type: string;
  title: string;
  rare: string;
  quality: string;
  price: number;
  winchance: number;
  iconItemId?: string | null;
};

export type TCase = {
  id: number;
  title: string;
  price: number;
  items: any[];
};

export type TCaseFromBack = {
  id: number;
  title: string;
  price: number;
  packItemsList: TItemFromBack[];
};

export type TEditableCase =
  | {
      id: number;
      title: string;
      price: number;
      packItemsList?: any[];
      items?: any[];
      image?: string;
      imageType?: string;
    }
  | undefined
  | null;
