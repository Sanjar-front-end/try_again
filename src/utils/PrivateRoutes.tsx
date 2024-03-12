import { Navigate } from "react-router-dom"
import React, { FC } from "react"

interface MyComponentProps {
    children? : React.ReactNode
}

let auth = {"token" : true}

const PrivateRoutes: FC<MyComponentProps> = ({ children }) => {
    return (
        !auth.token ? <Navigate to="/login" replace/> : children
    )
}

export default PrivateRoutes;