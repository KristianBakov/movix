import { useParams } from "react-router-dom";
import {
  CenteredGradientBox,
  GradientBox,
} from "../../commons/styles/general.styles";

import { useGetSearchQuery } from "../../features/api/apiSlice";

const SearchResults = () => {
  const { query } = useParams();

  const { data: searchResult, isSuccess } = useGetSearchQuery({ query });
  console.log(searchResult);

  return <GradientBox></GradientBox>;
};

export default SearchResults;
