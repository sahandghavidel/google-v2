import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import { useRouter } from "next/router";
import Response from "../Response";

export default function Search({ results }) {
  console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>
      {/* Search Header */}

      <SearchHeader />

      {/* Search Results */}

      <SearchResults results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.API_KEY
        }&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${
          context.query.searchType && "&searchType=image"
        }`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
