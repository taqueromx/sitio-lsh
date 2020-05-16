import React from 'react'

import AdminDashboard from './admin/AdminDashboard'
import GuiaDashboard from './guia/GuiaDashboard'
import LiderDashboard from './lider/LiderDashboard'

function DashboardSelect() {
    /*  Esta información hay que meterla al contexto del usuario
        y aquí utilizarla para mandar al usuario a otras opciones
        según sus privilegios */
    const userType = 'admin'

    switch(userType) {
        case 'admin':
          return <AdminDashboard />
        case 'guia':
          return <GuiaDashboard />
        default: //el default es guia
            return <LiderDashboard />
      }
}

export default DashboardSelect