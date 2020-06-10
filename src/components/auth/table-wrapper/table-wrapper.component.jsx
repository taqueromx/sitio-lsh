import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import { Box } from 'rebass';
import ClipLoader from 'react-spinners/ClipLoader';

import './table-wrapper.style.css';

const firebase = require('firebase');
const db = firebase.firestore();
const projectColumns = [
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
    width: '400px',
    wrap: true
  },
  {
    name: 'Lugar',
    selector: 'lugar',
    sortable: false,
    width: '400px',
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
    sortable: false,
    wrap: true
  },
];
const usersColumns = [
  {
    name: 'Nombre',
    selector: 'nombre',
    sortable: true,
    wrap: true
  },
  {
    name: 'Apellido Paterno',
    selector: 'apellidoPaterno',
    sortable: true,
    wrap: true
  },
  {
    name: 'Apellido Materno',
    selector: 'apellidoMaterno',
    sortable: true,
    wrap: true
  },
  {
    name: 'Matricula',
    selector: 'matricula',
    sortable: true,
    wrap: true
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    wrap: true
  },
  {
    name: 'Carrera',
    selector: 'carrera',
    sortable: true,
    wrap: true
  },
  {
    name: 'Semestre',
    selector: 'semestre',
    sortable: true,
    wrap: true
  },
  {
    name: 'Talla de Playera',
    selector: 'tallaPlayera',
    sortable: true,
    wrap: true
  },
];

export default class TableWrapper extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...this.state,
            tableData : [],
            loading: true,
            dataReady: false
        }
    }

    componentDidMount(){
        let dataToSave = []; 
        let test = false;

        if(this.props.selectedItem === 'Todos los Proyectos'){
          db.collection('projects')
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  dataToSave.push({...doc.id,...doc.data()});
              }); 
          }).then(() => {
              this.setState({tableData:dataToSave,loading:false});
          })
          .catch((error) => {
              console.log('Error getting documents: ', error);
          });
        }else{
          db.collection('lideres')
          .get()
          .then((querySnapshot) => {
              querySnapshot.forEach(function(doc) {
                dataToSave.push({...doc.id,...doc.data()});
              }); 
          })
          .then(() => {
            this.setState({tableData:dataToSave,loading:false});
          })
          .catch((error) => {
              console.log('Error getting documents: ', error);
          });
        }
        
    }

    render() {
        const {tableData, loading} = this.state;
        const {selectedItem} = this.props;
        let body;

        if(loading){
            body = <ClipLoader
                        size={150}
                        color={'#00bff'}
                        loading={loading}
                    />;
        }else{
          if(selectedItem === 'Todos los Proyectos'){
            body = <DataTable
                        title='Proyectos'
                        highlightOnHover={true}
                        columns={projectColumns}
                        data={tableData}
                    />;
          }else{
            body = <DataTable
                        title='Usuarios Activos'
                        highlightOnHover={true}
                        columns={usersColumns}
                        data={tableData}
                  />;
          }
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