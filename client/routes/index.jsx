
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

function AppRoutes({isUserLoggedIn}) { 
    return isUserLoggedIn ? <PrivateRoutes /> : <PublicRoutes/>;
}

export default AppRoutes;