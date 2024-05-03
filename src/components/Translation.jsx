import React from 'react'
import { LANGUAGES } from '../utils/presets'

export default function Translation(props) {
    const { textElement, toLanguage, translating, setToLanguage, generateTranslation, finished } = props
    return (
        <>
            <div className='h-64'>
            {(<div className='flex flex-col gap-1 h-20'>
                <p className='text-xs sm:text-sm font-medium text-slate-500 mr-auto'>To language</p>
                <div className='flex items-stretch gap-2 sm:gap-4' >
                    <select disabled={translating} value={toLanguage} className='flex-1 outline-none w-full focus:outline-none bg-white duration-200 p-2  rounded' onChange={(e) => setToLanguage(e.target.value)}>
                        <option value={'Select language'}>Select language</option>
                        {Object.entries(LANGUAGES).map(([key, value]) => {
                            return (
                                <option key={key} value={value}>{key}</option>
                            )
                        })}

                    </select>
                    <button disabled={translating} onClick={generateTranslation} className='specialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200'>Translate</button>
                </div>
            </div>)}
            <div className='flex flex-col max-w-prose w-full mx-auto gap-4 h-44 border-dashed border-2 border-sky-500 rounded-lg'>
                <div className='flex justify-center items-center text-justify justify-center h-full m-2.5 overflow-auto'>
                    {(!finished || translating)  && (
                        <div className='grid justify-center place-items-center'>
                            <i className="fa-solid fa-spinner animate-spin"></i>
                        </div>
                    )}
                    {(textElement && !translating) && (
                        <div>
                        {textElement}</div>
                    )}
                </div>
            </div>
            </div>
        </>
    )
}
