import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./env";

export const sanityEnabled = Boolean(projectId);

export const client = createClient({
  projectId: projectId || "demo-project",
  dataset,
  apiVersion,
  useCdn
});
