import { useState, useEffect } from "react";

export default function useFetch(search) {
  // This hook uses state management AND hooks
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Cl8TyQDyWS0dzM4QssTsPbwfdb0ypcfy&q=${search}&limit=25&offset=0&rating=pg-13&lang=en`;

    async function init() {
      // This is with fetch, but it could just as easily be with axios
      if (search.length < 3) {
        return;
      }
      setLoading(true);
      setData([]);
      setError(null);
      try {
        const response = await fetch(url);

        const json = await response.json();
        setData(() =>
          json.data.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
          }))
        );
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [search]);

  // Exposes the data, any error, and whether or not it was loading
  return { data, error, loading };
}
