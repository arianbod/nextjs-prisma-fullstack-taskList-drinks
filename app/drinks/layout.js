import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='max-w-xl'>
            <div className="mockup-code">
                <pre data-prefix="$">
                    <code>
                        npx create-next
                    </code>
                </pre>
            </div>
            <span>
                {children}
            </span>
        </div>
    )
}

export default layout