"use server";

import { revalidateTag } from "next/cache";

const addCustomer = async (formData) => {
  await fetch("http://localhost:3000/api/v1/customers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  revalidateTag("customers");
};

export default addCustomer;
