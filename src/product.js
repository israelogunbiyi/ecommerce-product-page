import img1 from "./images/image-product-1.jpg"
import img2 from "./images/image-product-2.jpg"
import img3 from "./images/image-product-3.jpg"
import img4 from "./images/image-product-4.jpg"

const initialProducts = [{
  id: crypto.randomUUID(),
  productImgs: [img1, img2, img3, img4],
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
  price: 125,
  rate: 50,
  discountedPrice: 250,
}]
export default initialProducts;