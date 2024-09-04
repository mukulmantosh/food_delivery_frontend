export interface MenuItem {
    menu_id: number;
    restaurant_id: number;
    name: string;
    description: string;
    photo: string;
    price: number;
    category: string;
    available: boolean;
    CreatedAt: string;
    UpdatedAt: string;
}

export interface CartItem {
    cart_item_id: number;
    cart_id: number;
    item_id: number;
    restaurant_id: number;
    quantity: number;
    CreatedAt: string;
    UpdatedAt: string;
    menu_item: MenuItem;
}

export interface ItemsResponse {
    items: CartItem[];
}
