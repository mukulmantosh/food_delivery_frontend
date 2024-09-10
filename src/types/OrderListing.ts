export interface OrderItem {
    order_id: number;
    order_status: string;
    total_amount: number;
    delivery_address: string;
    CreatedAt: string;
    UpdatedAt: string;
}

export interface OrderListingResponse {
    orders: OrderItem[];
}
