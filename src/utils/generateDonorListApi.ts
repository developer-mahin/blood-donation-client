const generateDonorListApi = (baseUrl: string, query: Record<string, any>) => {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(query)) {
    if (value) {
      params.set(key, value);
    }
  }

  return `${baseUrl}&${params.toString()}`;
};

export default generateDonorListApi;
