import React from 'react'

const page = ({params}: {params: {id: string}}) => {
    const {id} = params;

    return (
        <div>
            <h1>User details page</h1>
            <h2>User profile {id}</h2>
        </div>
    )
}

export default page