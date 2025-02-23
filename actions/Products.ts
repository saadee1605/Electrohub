"use server";
import connectDB from "@/lib/connectDB";
import ProductModel from "@/models/products";
interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  isHotProduct: boolean;
  description: string;
}

export async function getallProducts(): Promise<Product[]> {
  await connectDB();

  const allProducts = await ProductModel.find().lean();
  return JSON.parse(JSON.stringify(allProducts));
}
export async function getCategoryWiseProduct(
  category: string
): Promise<Product[]> {
  await connectDB();

  const categorizedProducts = await ProductModel.find({
    category: category,
  }).lean();
  return JSON.parse(JSON.stringify(categorizedProducts));
}
export async function getSingleProduct(id: string,category: string): Promise<Product | null> {
  await connectDB();

  const product = await ProductModel.findOne({ _id: id, category }).lean();

  if (!product) {
    return null; 
  }

  return JSON.parse(JSON.stringify(product));
}

export async function getHotProducts(): Promise<Product[]> {
  

  await connectDB();
  const filteredProducts = await ProductModel.find({
    isHotProduct: true,
  }).lean();


  return JSON.parse(JSON.stringify(filteredProducts));
}
