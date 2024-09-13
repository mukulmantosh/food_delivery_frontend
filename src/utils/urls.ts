export const USER_LOGIN_URL = "/user/login"
export const USER_REGISTER_URL = "/user/register"
export const USER_LOGOUT_URL = "/user/logout"
export const ORDERS_URL = "/cart/orders"
export const CART_URL = "/cart"


const ORDER_DETAIL_URL = "/cart/order/:id"
export function getOrderDetailUrl(id: number | string): string {
    return ORDER_DETAIL_URL.replace(":id", id.toString());
}



export const API_BASE_URL = "http://localhost:8080"