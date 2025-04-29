export interface IShopItem {
  brand: string;
  title: string;
  description: string;
  descriptionFull: string;
  price: number;
  currency: string;
}

export interface ShopItemProps {
  item: IShopItem;
}