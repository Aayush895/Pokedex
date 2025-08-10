export async function fetchPokedexData(URL) {
  let response
  let infoURLs
  if (URL != null && URL != '') {
    const responseData = await fetch(URL)
    response = await responseData.json()
    infoURLs = response?.results?.map((result) => result.url)
  }

  return [response, infoURLs]
}
