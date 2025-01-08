import { connectDB, disconnectDB } from "@/db/connectDB";
import Customer from "@/db/models/Customer";
import { revalidateTag } from "next/cache";

// GET a single customer
export async function GET(request, { params }) {
  try {
    await connectDB();
    const customer = await Customer.findById(params.id);
    if (!customer) {
      return new Response("Customer not found", { status: 404 });
    }
    return new Response(JSON.stringify(customer), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// PATCH (update) a customer
export async function PATCH(request, { params }) {
  try {
    await connectDB();
    const body = await request.json();
    const updatedCustomer = await Customer.findByIdAndUpdate(params.id, body, {
      new: true,
    });
    if (!updatedCustomer) {
      return new Response("Customer not found", { status: 404 });
    }
    return new Response(JSON.stringify(updatedCustomer), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching customers:", error);
    disconnectDB();
  } finally {
    disconnectDB();
  }
}

// DELETE a customer
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deletedCustomer = await Customer.findByIdAndDelete(params.id);
    if (!deletedCustomer) {
      return new Response("Customer not found", { status: 404 });
    }
    revalidateTag("customers");
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
