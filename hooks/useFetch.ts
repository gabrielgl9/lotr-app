import useSWR from "swr";

export function useFetch<Data = any, Error = any>(url: string, headers?: any) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await fetch(url, headers).then((res) => res.json());

    return response;
  });

  return { data, error };
}
