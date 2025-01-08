import { connectDB, disconnectDB } from "@/db/connectDB";
import Product from "@/db/models/Product";

// GET all products
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// POST a new product
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newProduct = new Product(body);
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}
