import Center from '../Components/Center/Center';
import User from '../Components/User/User';

import {HOME_PATH, USER_PATH} from '../consts/routes'

const RouteMaster = [
    {
        path: HOME_PATH,
        component: Center
    },
    {
        path: USER_PATH,
        component: User
    },
]

export default RouteMaster;