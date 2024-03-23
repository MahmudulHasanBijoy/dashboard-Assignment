import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useCards = () => {
  const axiosPublic = useAxiosPublic();
  const { data: cards = [], refetch } = useQuery({
    queryKey: ["cards"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cards");
      return res.data;
    },
  });
  return [cards, refetch];
};

export default useCards;
