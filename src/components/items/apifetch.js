export async function Apifetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data from the API");
  }
    return await res.json();
}