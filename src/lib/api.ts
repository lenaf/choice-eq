const PAGE_GRAPHQL_FIELDS = `
  route
  sectionsCollection(limit: 10){
    items {
      name
      heading
      imagesCollection(limit: 10) {
        items {
          url
        }
      }
    }
}
`;


async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    },
  ).then((response) => response.json());
}

export async function getAllPages(isDraftMode: boolean): Promise<any[]> {
  const fetchResponse = await fetchGraphQL(
    `query {
      pageCollection(limit: 20) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  return fetchResponse?.data?.pageCollection?.items;
}

export async function getPage(
  route: string,
  preview: boolean,
): Promise<any> {
  const fetchResponse = await fetchGraphQL(
    `query {
      pageCollection(where: { route: "${route}" }, preview: ${preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview,
  );

  return fetchResponse?.data?.pageCollection?.items?.[0];
}
