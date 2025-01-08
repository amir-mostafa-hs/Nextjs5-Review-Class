"use server";

import { revalidateTag } from "next/cache";

const deleteCustomer = async (id) => {
  await fetch(`http://localhost:3000/api/v1/customers/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  revalidateTag("customers");
};

export default deleteCustomer;
