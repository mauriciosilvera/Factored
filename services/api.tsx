export async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(`https://www.swapi.tech/api/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

