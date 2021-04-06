import {
  Home,
  Products,
  Product,
  Cart,
  Confirm,
  Category,
  OrderHistory,
  ManagementProducts,
  ManagementUser,
  ManagementOrder,
  CreateProduct,
} from "./lazyRoutes";
import NotFound from "../pages/NotFound";

const mainRoutes = [
  {
    path: "/",
    pageName: "Home",
    exact: true,
    component: Home,
  },
  {
    path: "/products",
    pageName: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    pageName: "Product",
    component: Product,
  },
  {
    path: "/cart",
    pageName: "Cart",
    component: Cart,
  },
  {
    path: "/confirm",
    pageName: "Confirm",
    component: Confirm,
  },
  {
    path: "/category/:id",
    pageName: "Category",
    component: Category,
  },
  {
    path: "/order-history",
    pageName: "OrderHistory",
    component: OrderHistory,
  },
  {
    pageName: "NotFound",
    component: NotFound,
  },
];

const adminRoutes = [
  {
    path: "/management-products",
    pageName: "ManagementProducts",
    component: ManagementProducts,
  },
  {
    path: "/management-user",
    pageName: "ManagementUser",
    component: ManagementUser,
  },
  {
    path: "/management-order",
    pageName: "ManagementOrder",
    component: ManagementOrder,
  },
  {
    path: "/create-product",
    pageName: "CreateProduct",
    component: CreateProduct,
  },
];

export { mainRoutes, adminRoutes };
