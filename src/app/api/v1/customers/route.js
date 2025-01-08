import { connectDB, disconnectDB } from "@/db/connectDB";
import Customer from "@/db/models/Customer";
import { revalidateTag } from "next/cache";

// GET all customers
export async function GET() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return new Response(JSON.stringify(customers), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// POST a new customer
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newCustomer = new Customer(body);
    await newCustomer.save();

    revalidateTag("customers");

    return new Response(JSON.stringify(newCustomer), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}
