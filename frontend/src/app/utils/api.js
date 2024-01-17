export const fetchData = async () => {
  // Fetch your data from an API or any other source
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  return data;
};
