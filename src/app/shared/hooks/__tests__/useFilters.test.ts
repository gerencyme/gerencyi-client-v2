import { useFilters } from "@shared/hooks/useFilters";
import { productMock } from "@shared/mocks";
import { filterMonthsOptions } from "@shared/utils/constants/generalFiltersOptions";
import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("useFilter", () => {
  beforeEach(() => jest.clearAllMocks());

  it("should be able to filter this list with default values", () => {
    const { result } = renderHook(() => useFilters(productMock));
    const { filteredData } = result.current;

    expect(filteredData[0]).toEqual(productMock[0]);
  });

  describe("useFilter", () => {
    it("should be able to filter by orderStatus", async () => {
      const { result } = renderHook(() => useFilters(productMock));

      act(() => {
        result.current.setSelectedStatus("canceled");
      });

      await waitFor(() => {
        expect(result.current.filteredData[0].orderStatus).toEqual("canceled");
      });
    });
  });

  it("should be able to filter by orderDate", async () => {
    const { result } = renderHook(() => useFilters(productMock));

    act(() => {
      result.current.setCurrentMonth(filterMonthsOptions[5].label);
    });

    const expectDate = "2024-06-09T01:25:36.215Z";

    await waitFor(() => {
      expect(result.current.filteredData[0].orderDate).toEqual(expectDate);
    });
  });
});
