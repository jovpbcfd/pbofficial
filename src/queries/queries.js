export const POST_CURRENT_OTHER_QUERY = `{

  "currentPost": *[_type == "Post" && slug.current == $slug][0] {

    title,

    body,

    description,

    publishedAt,

    featuredImage {

      alt,

      asset->{

        url

      }

    }

  },

  "otherBlogs": *[_type == "Post" && slug.current != $slug] | order(publishedAt desc)[0...3] {

    _id,

    title,

    description,

    slug,

    publishedAt,

    featuredImage {

      alt,

      asset->{

        url

      }

    }

  }

}`;





export const POSTS_QUERY = `*[_type == "Post"] | order(publishedAt desc) {

  _id,

  title,

  slug,

  publishedAt,

  description,

  featuredImage {

     alt,

    asset->{

      url



    }

  }

}`;

export const POSTS_QUERY_MOST_RECENT = `*[_type == "Post"] | order(publishedAt desc) [0...3] {

_id,

title,

slug,

publishedAt,

description,

featuredImage {

   alt,

  asset->{

    url



  }

}

}`;