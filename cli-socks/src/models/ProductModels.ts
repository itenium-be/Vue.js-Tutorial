export interface ProductModel {
  id: number;
  name: string;
  brand: string; // used for the image uri
  price: number;
  variants: ProductVariantModel[];
  inventory: number;
  reviews: ProductReviewModel[];
}

export interface ProductVariantModel {
  id: number;
  color: string; // used for the image uri
  fancyColor: string; // color-box background color
}


export interface ProductReviewModel {
  name: string;
  rating: number;
  fullReview: string;
}
