export const API_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAP_API_ACCESS_TOKEN || "";

export const LOCAL_BASE_URL = "https://maps.barikoi.com" || "";
// http://maps.barikoi.com/?place=OCTV3052#12.58/24.1907/90.41679
// export const LOCAL_BASE_URL = "http://localhost:3000/" || "";

export const API = {
  AUTOCOMPLETE: `https://barikoi.xyz/v1/api/search/autocomplete/${API_ACCESS_TOKEN}/place?q=`,
};
