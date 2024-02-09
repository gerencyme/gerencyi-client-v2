import {
  TOrderStatus,
  TProduct,
  TSimilarCompaniesContent,
} from "@shared/types";

export type TProductCard = {
  companyId: number | string;
  orderColorIdentity: string;
  isLiked: boolean;
  orderDate: string | Date;
  orderId: string;
  orderStatus: TOrderStatus;
  product: TProduct;
  partnerCompaniesInthisOrder: TSimilarCompaniesContent[];
  isModalOpen: boolean;
};
