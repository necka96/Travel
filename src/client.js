import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "v6gi0v1a",
  dataset: "production",
  apiVersion: "2022-08-12",
  useCdn: true,
  token:
    "skb0kVLcojuvgry4ToM3xDZEm5pBf5Wg5ByrPHil1aRRqyaKlN9vsdpJ27SDdBzGEFnznDq7xZBnHLSQOgPkhPDvg3ALfgKktI1pOQTSufhuN8PkYTouzeUpPfnFLUVrSkK3cuIaSY4GbOtAvJWfGqZnCXHdGLq2Oi9KjcSzN1o2DWWP39yL",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
