export interface ShopItem {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

export type ShopItemProps = {
  item: ShopItem;
};