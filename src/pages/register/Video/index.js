import React from 'react';
import ThemplateBase from '../../../components/ThemplateBase ';
import { Link } from 'react-router-dom';


function RegisterVideo() {
    return (

        <ThemplateBase>
            <h1>Cadastro de Video</h1>

            <Link to="/register/Category">
                Cadastrar Categoria
            </Link>

        </ThemplateBase>

    );
};

export default RegisterVideo;
