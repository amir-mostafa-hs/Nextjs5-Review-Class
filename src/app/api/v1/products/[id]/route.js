import { connectDB, disconnectDB } from "@/db/connectDB";
import Product from "@/db/models/Product";

// GET a single product
export async function GET(request, { params }) {
  try {
    await connectDB();
    const product = await Product.findById(params.id);
    if (!product) {
      return new Response("Product not found", { status: 404 });
    }
    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// PATCH (update) a product
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const updatedProduct = await Product.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!updatedProduct) {
      return new Response("Product not found", { status: 404 });
    }
    return new Response(JSON.stringify(updatedProduct), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// DELETE a product
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deletedProduct = await Product.findByIdAndDelete(params.id);
    if (!deletedProduct) {
      return new Response("Product not found", { status: 404 });
    }
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}
