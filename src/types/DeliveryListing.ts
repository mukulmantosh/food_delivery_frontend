export interface Delivery {
    delivery_id: number;
    delivery_person_id: number;
    delivery_status: string;
    delivery_time: string;
    created_at: string;
    name: string;
    vehicle_details: string;
    phone: string;
}

export interface DeliveryListingResponse {
    delivery_info: Delivery[];
}
