import imageUrlBuilder from '@sanity/image-url'
import {client} from './sanityClient'

const builder = imageUrlBuilder(client)

// Function to build image URL
export const urlFor = (source) => builder.image(source)