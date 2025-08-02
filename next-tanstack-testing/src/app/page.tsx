'use client';

import { Box } from "@mui/material";
import styles from "./page.module.css";
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'
import WelcomePage from "./components/WelcomePage";

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box className={styles.page}>
        <WelcomePage />
      </Box>
    </QueryClientProvider>
  );
}
