export const API_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_MAP_API_ACCESS_TOKEN || "";

export const API = {
  RUPANTOR_API: `https://barikoi.xyz/v1/api/search/${API_ACCESS_TOKEN}/rupantor/geocode`,
};
