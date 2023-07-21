const theBaseUrl = "https://swapi.dev/api/";

export async function getAllStarships() {
  const response2fetching = await fetch(`${theBaseUrl}/starships/`);
  const infoData = await response2fetching.json();
  return infoData.results;
}