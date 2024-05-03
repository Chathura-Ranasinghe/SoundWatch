import React from 'react'

export default function Transcription(props) {
    const { textElement } = props

    return (
        <div className="flex flex-col max-w-prose w-full mx-auto gap-4 h-64 border-dashed border-2 border-sky-500 rounded-lg">
            <div className='flex justify-center items-center text-justify justify-center h-full m-2.5 overflow-auto'>
            {textElement}
            </div>
        </div>
    )
}