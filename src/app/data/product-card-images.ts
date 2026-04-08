import productImageOne from "../../assets/Product (1).jpg";
import productImageTwo from "../../assets/Product (2).jpg";
import productImageThree from "../../assets/Product (3).jpg";
import productImageFour from "../../assets/Product (4).jpg";

const productCardImageById: Record<string, string> = {
  methanol: productImageOne,
  "aqueous-formaldehyde-solution": productImageTwo,
  "urea-formaldehyde-concentrate": productImageTwo,
  "hexamethylene-tetramine": productImageFour,
  formaldehyde: productImageTwo,
  paraformaldehyde: productImageTwo,
  "urea-formaldehyde-powder-resin": productImageTwo,
  "melamine-formaldehyde-powder-resin": productImageTwo,
  derivatives: productImageThree,
  "melamine-urea-formaldehyde-resin": productImageTwo,
  "sulphonated-naphthalene-formaldehyde": productImageTwo,
  dimethylamine: productImageFour,
  specialty: productImageFour,
  trimethylamine: productImageFour,
  monomethylamine: productImageFour,
};

export function getProductCardImage(productId: string) {
  return productCardImageById[productId] ?? productImageFour;
}
