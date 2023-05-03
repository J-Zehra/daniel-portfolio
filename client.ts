import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "oywhs2jd",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-03-12",
});

export default client;

