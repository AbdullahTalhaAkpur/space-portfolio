declare module 'react-scroll' {
    export interface LinkProps {
        to: string;
        smooth?: boolean;
        duration?: number;
        className?: string;
        children?: React.ReactNode;
    }

    export const Link: React.FC<LinkProps>;
}
