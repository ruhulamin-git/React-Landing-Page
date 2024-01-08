import React from 'react'

const Fixedwidth = ({ children }) => {
    return (
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {children}
        </div>
    )
}

export default Fixedwidth