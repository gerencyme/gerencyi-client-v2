import { TProductCard } from "@shared/types";
import { randomUUID } from "crypto";

export const productMock: TProductCard[] = [
  {
    companyId: randomUUID(),
    isLiked: true,
    isModalOpen: false,
    orderColorIdentity: "$ffffff",
    orderDate: new Date(),
    orderId: String(randomUUID),
    orderStatus: "done",
    partnerCompaniesInthisOrder: [],
    product: {
      lastTotalPrice: 10,
      productBrand: "Product brand",
      productName: "Product name",
      quantity: 1,
      totalPrice: 10,
      unitPrice: 10,
    },
  },
  {
    companyId: randomUUID(),
    isLiked: true,
    isModalOpen: false,
    orderColorIdentity: "$000",
    orderDate: new Date(),
    orderId: String(randomUUID),
    orderStatus: "canceled",
    partnerCompaniesInthisOrder: [],
    product: {
      lastTotalPrice: 20,
      productBrand: "Product brand 01",
      productName: "Product name 01",
      quantity: 2,
      totalPrice: 10,
      unitPrice: 10,
    },
  },
  {
    companyId: randomUUID(),
    isLiked: true,
    isModalOpen: false,
    orderColorIdentity: "$000",
    orderDate: "2024-06-09T01:25:36.215Z",
    orderId: String(randomUUID),
    orderStatus: "underAnalysis",
    partnerCompaniesInthisOrder: [],
    product: {
      lastTotalPrice: 20,
      productBrand: "Product brand 01",
      productName: "Product name 01",
      quantity: 2,
      totalPrice: 10,
      unitPrice: 10,
    },
  },
];
