import { SearchIcon, PhotographIcon } from "@heroicons/react/outline";
import SearchHeaderOption from "./SearchHeaderOption";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 select-none w-full text-gray-700 text-sm lg:text-base  lg:pl-52 border-b-[1px]">
      <SearchHeaderOption
        Icon={SearchIcon}
        title="All"
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        Icon={PhotographIcon}
        title="Images"
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
