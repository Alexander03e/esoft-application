import { ThemeProvider } from '@mui/material';
import { theme } from '@/Shared/theme';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
}

export default App;
