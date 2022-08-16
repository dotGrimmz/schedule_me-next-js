import { useState, useMemo } from "react";
import _ from "lodash";
import { AvailablePeriod } from "../../../../types/availability.types";

export const usePagination = (periods: AvailablePeriod[]) => {
  const [currentPage, setCurrentPage] = useState(0);

  const numItemsPerPage = 7;

  const numPeriods = periods.length
    ? Math.ceil(periods.length / numItemsPerPage)
    : 1;

  const chunks = useMemo(() => _.chunk(periods, numItemsPerPage), [
    numItemsPerPage,
    periods,
  ]);
  const paginatedPeriods = chunks[currentPage];

  const incrementPageNumber = () =>
    setCurrentPage((prev) => {
      if (numPeriods <= prev) {
        return prev;
      }
      return prev + 1;
    });

  const decrementPageNumber = () =>
    setCurrentPage((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });

  const hideIncrement = currentPage === numPeriods;
  const hideDecrement = currentPage === 0;

  return {
    hideDecrement,
    hideIncrement,
    decrementPageNumber,
    incrementPageNumber,

    paginatedPeriods,
  };
};
