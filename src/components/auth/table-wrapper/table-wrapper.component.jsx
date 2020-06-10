import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { Box } from 'rebass';
import ClipLoader from 'react-spinners/ClipLoader';

import './table-wrapper.style.css';

const firebase = require('firebase');
const db = firebase.firestore();
const columns = [
  {
    name: 'Proyecto',
    selector: 'nombre',
    sortable: true,
    wrap: true
  },
  {
    name: 'Organizador',
    selector: 'organizador',
    sortable: true,
    wrap: true
  },
  {
    name: 'Descripcion',
    selector: 'descripcionGeneral',
    sortable: false,
    wrap: true
  },
  {
    name: 'Lugar',
    selector: 'lugar',
    sortable: false,
    wrap: true
  },
  {
    name: 'Inicio',
    selector: 'fechaInicio',
    sortable: false,
    wrap: true
  },
  {
    name: 'Cierre',
    selector: 'fechaCierre',
    sortable: false,
    wrap: true
  },
  {
    name: 'Categoria',
    selector: 'categoria',
    sortable: true,
    wrap: true
  },
  {
    name: 'Publicado?',
    selector: 'publicado',
    sortable: true,
    wrap: true
  },
];

export default class TableWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...this.state,
            projects : [],
            loading: true
        }
    }

    componentDidMount(){
        let projectsToSave = []; 
        db.collection('projects')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                projectsToSave.push({...doc.id,...doc.data()});
            });
        }).then(() => {
            this.setState({projects:projectsToSave,loading:false});
        })
        .catch((error) => {
            console.log('Error getting documents: ', error);
        });
    }

    render() {
        const {projects, loading} = this.state;
        let body;

        if(loading){
            body = <ClipLoader
                        size={150}
                        color={'#00bff'}
                        loading={loading}
                    />
    }else{
            body = <DataTable
                        title='Proyectos'
                        highlightOnHover={true}
                        columns={columns}
                        data={projects}
                    />;
        }

        return (
            <Box
                className='spinner-style' 
                sx={{
                    display: 'grid',
                    gridGap: 1,    
                    gridTemplateColumns: 'repeat(1, minmax(128px, 1fr))',
                }}
            >
                {body}
            </Box>
        );
    }
}