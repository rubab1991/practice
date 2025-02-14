import { createClient } from "next-sanity";
import { apiVersion,dataset,projectId,token } from "../env";
export const client = createClient({
  projectId, // Replace with your actual Sanity project ID
  dataset, // or your dataset name
  apiVersion, 
  token,
  useCdn: true,
})