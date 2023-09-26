import React from 'react';
import ThemplateBase from '../../../components/ThemplateBase ';
import { Link } from 'react-router-dom';


function RegisterCategory() {
    return (

        <ThemplateBase>
            <h1>Cadastro de Categoria</h1>

            <form>

                <label>
                    Nome da Categoria:
          <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
        </button>
            </form>


            <Link to="/">
                Ir para home
      </Link>
        </ThemplateBase>

    );
};

export default RegisterCategory;
