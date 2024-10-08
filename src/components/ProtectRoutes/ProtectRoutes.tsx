import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface ProtectRoutesProps {
    isLogin?: boolean;
    children: ReactNode;
}

function ProtectRoutes({ children }: ProtectRoutesProps): JSX.Element {
    const isLogin: boolean = useSelector(
        (state: RootState) => state.auth.isSuccess
    );

    if (!isLogin) {
        return <Navigate to="/login" replace={true} />;
    }

    return <>{children}</>;
}

export default ProtectRoutes;
