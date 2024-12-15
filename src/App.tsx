import { ThemeProvider } from '@mui/material';
import { theme } from '@/Shared/theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
    const client = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <ReactQueryDevtools client={client} />
                    <AppRoutes />
                </QueryClientProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
