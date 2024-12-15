import useBreakpoint from 'use-breakpoint';

export const BREAKPOINTS = { mobile: 0, tablet: 721, desktop: 1024 };

export const MOBILE = 'mobile';

export const DESKTOP = 'desktop';

export const TABLET = 'tablet';

export const useMedia = (): Record<string, boolean> => {
    const { breakpoint } = useBreakpoint(BREAKPOINTS);
    const isMobile = breakpoint === MOBILE;
    const isDesktop = breakpoint === DESKTOP;
    const isTablet = breakpoint === TABLET;

    return {
        isMobile,
        isDesktop,
        isTablet,
    };
};
