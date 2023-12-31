import { useEffect, useState } from "react";

export default function withLoader(Element, url) {
  const WithLoaderHOC = (props) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return <div>Loading...</div>;
    }

    return <Element {...props} data={data} />;
  };

  return WithLoaderHOC;
}
