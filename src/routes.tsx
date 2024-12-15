/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Route, Routes } from 'react-router-dom';
import { Layout } from './shared/components/layout/Layout';
import { Error } from './shared/components/ui/Error';
import { AuthPage, MainPage, RealtorPage } from './pages';
import { PATHS } from './shared/consts';
import { Agents, Clients } from '@/Entities';
import { Estate } from './entities/Estate';
import { Requirement } from './entities/Requirement';
import { Mobile } from './entities/Mobile';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route ErrorBoundary={Error} element={<Layout />}>
                <Route path={PATHS.INDEX} element={<AuthPage />} />
                <Route path={PATHS.REALTOR.INDEX} element={<RealtorPage />}>
                    <Route index element={<MainPage />} />
                    <Route path={`${PATHS.REALTOR.AGENTS.ABSOLUTE}/*`} element={<Agents />} />
                    <Route path={`${PATHS.REALTOR.CLIENTS.ABSOLUTE}/*`} element={<Clients />} />
                    <Route path={`${PATHS.REALTOR.ESTATE.ABSOLUTE}/*`} element={<Estate />} />
                    <Route path={`${PATHS.REALTOR.MOBILE.ABSOLUTE}/*`} element={<Mobile />} />
                    <Route
                        path={`${PATHS.REALTOR.REQUIREMENT.ABSOLUTE}/*`}
                        element={<Requirement />}
                    />
                </Route>
            </Route>
        </Routes>
    );
};
