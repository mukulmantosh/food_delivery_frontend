interface Restaurant {
    restaurant_id: number;
    name: string;
    store_image: string;
    description: string;
    address: string;
    city: string;
    state: string;
    CreatedAt: string;
    UpdatedAt: string;
}

interface MenuItem {
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

interface OrderItem {
    order_item_id: number;
    order_id: number;
    item_id: number;
    restaurant_id: number;
    quantity: number;
    price: number;
    CreatedAt: string;
    UpdatedAt: string;
    MenuItem: MenuItem
    Restaurant: Restaurant
}

export interface OrderDetailResponse {
    orders: OrderItem[];
}
