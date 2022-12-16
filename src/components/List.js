import React from "react";
import { default as api } from "../store/apiSlice";
import "boxicons";
export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  // console.log(api.useGetCategoriesQuery());

  const [deleteTransaction] = api.useDeleteTransactionMutation();

  let Transaction;
  const handleClick = (e) => {
    console.log(e.target.dataset.id);
    if (!e.target.dataset.id) return 0;
    deleteTransaction({ _id: e.target.dataset.id });
  };
  Transaction = <div>Fetching </div>;
  if (isFetching) {
  } else if (isSuccess) {
    Transaction = data.map((v, i) => (
      <Transaction2 key={i} category={v} handler={handleClick}></Transaction2>
    ));
  } else if (isError) {
    Transaction = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transaction}
    </div>
  );
}

function Transaction2({ category, handler }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 shadow-md py-2  rounded-r"
      style={{ borderRight: `7px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon
          size="20px"
          color={`${category.color ?? "#e5e5e5"}`}
          name="trash"
          onClick={handler}
          data-id={category._id ?? ""}
        ></box-icon>
      </button>
      <span className="block w-full ">{category.name ?? ""}</span>
    </div>
  );
}
