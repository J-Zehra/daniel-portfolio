import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "5isrvffj",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-05-20",
});

export default client;

