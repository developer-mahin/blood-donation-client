"use client";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter, useSearchParams } from "next/navigation";
import * as React from "react";

type TPaginationControllerProps = {
  totalPages: number;
  currentPage: number;
};

export default function PaginationController({
  totalPages,
  currentPage,
}: TPaginationControllerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams as unknown as string);
    params.set("page", value.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <Stack spacing={2} mt={4}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
