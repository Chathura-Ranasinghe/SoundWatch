import React from 'react'

export default function Transcription(props) {
    const { textElement } = props

    return (
        <div className="flex justify-center items-center text-justify justify-center h-full m-2.5 overflow-auto ">
        {textElement}</div>
    )
}