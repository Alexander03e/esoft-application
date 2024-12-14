import { ThemeProvider } from '@mui/material';
import { theme } from '@/Shared/theme';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
