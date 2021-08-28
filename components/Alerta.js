import React, { useContext} from 'react';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';

const Alerta = () => {

    const AuthContext = useContext(authContext);
    const { mensaje } = AuthContext;

    const AppContext = useContext(appContext);
    const { mensaje_archivo } = AppContext;

    let tipo = 'bg-green-500';
    let msg = null;

    if (mensaje != null && mensaje.tipo && mensaje.tipo < 0) {
        tipo = 'bg-red-500';
        msg = mensaje.msg;
    }

    if (mensaje_archivo) {
        tipo = 'bg-red-500';
    }

    return ( 
        <div className={tipo + " py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto"}>
            { msg || mensaje_archivo }
        </div>
     );
}
 
export default Alerta;