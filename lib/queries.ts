import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
    `*[_type == "startup" && defined(slug.current)] | order(_createdAT desc){
  _id,
  title,
  slug,
  _createdAT,
  author -> {
    _id,
    name,
    slug,
    image,
    bio,
  },
  views,
  description,
  category,
  image,
}`)