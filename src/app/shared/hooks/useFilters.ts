import { useMemo, useState } from "react";
import { formateDate } from "@shared/utils/dates";
import { TOrderStatus, TProductCard } from "@shared/types";
import {
  filterMonthsOptions,
  filterStatusOptions,
  portugueseStatus,
} from "@shared/utils/constants/generalFiltersOptions";

/**
 * @param data should contain product to be filtered and can be used with a searchedData from useSearch
 * @returns filtered data by month (starting by currently month), by status or twice and filtered options setters
 */

export const useFilters = (data: TProductCard[]) => {
  const currentMonth = new Date().getMonth();
  const defaultMonthLabel = filterMonthsOptions[currentMonth].label;

  const [currentMonthFilter, setCurrentMonth] = useState(defaultMonthLabel);
  const [selectedStatus, setSelectedStatus] = useState<TOrderStatus | "todos">(
    "todos",
  );

  const monthIndex = filterMonthsOptions.findIndex(
    (item) => item.label === currentMonthFilter,
  );

  const translatedSelectedStatus = portugueseStatus[selectedStatus];

  const filteredData = useMemo(() => {
    const monthToFilter = monthIndex + 1;

    return data?.filter((item) => {
      const formattedDate = formateDate(item.orderDate);
      const dateMonth = parseInt(formattedDate?.split("/")[1], 10);

      return (
        dateMonth === monthToFilter &&
        (selectedStatus === "todos" || item.orderStatus === selectedStatus)
      );
    });
  }, [data, monthIndex, selectedStatus]);

  return {
    setCurrentMonth,
    setSelectedStatus,
    translatedSelectedStatus,
    currentMonthFilter,
    filteredData,
    filterMonthsOptions,
    filterStatusOptions,
  };
};
