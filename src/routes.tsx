import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import { Layout } from './shared/components/layout/Layout';
import { Error } from './shared/components/ui/Error';
import { AuthPage } from './pages';
import { PATHS } from './shared/consts';
import { RealtorPage } from './pages/Realtor';
import {
    Agents as RealtorAgents,
    Main as RealtorMain,
    Clients as RealtorClients,
} from './pages/Realtor/entities';
import { ClientCreate } from './pages/Realtor/entities/Clients/Create';

export const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route ErrorBoundary={Error} element={<Layout />}>
            <Route path={PATHS.INDEX} element={<AuthPage />} />
            <Route path={PATHS.REALTOR.INDEX} element={<RealtorPage />}>
                <Route index element={<RealtorMain />} />
                <Route path={PATHS.REALTOR.AGENTS.ABSOLUTE} index element={<RealtorAgents />} />
                <Route path={PATHS.REALTOR.CLIENTS.ABSOLUTE}>
                    <Route
                        path={PATHS.REALTOR.CLIENTS.ABSOLUTE}
                        index
                        element={<RealtorClients />}
                    />
                    <Route path={PATHS.REALTOR.CLIENTS.CREATE} element={<ClientCreate />} />
                </Route>
            </Route>
        </Route>,
    ),
);
