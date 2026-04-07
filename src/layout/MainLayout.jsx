import React from 'react'
import Navber from '../components/shared/navber/Navber'
import { Outlet } from 'react-router'

export default function MainLayout() {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    )
}
