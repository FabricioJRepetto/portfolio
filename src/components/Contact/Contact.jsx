import React, { useState, useEffect } from 'react'
import { useLang } from '../../lang-context';

import './Contact.css'

const Contact = ({ box }) => {
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false)
    const { state: { lang } } = useLang();

    useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 10);
        setTimeout(() => {
            setMounted(true)
        }, 1000);
    }, [])

    useEffect(() => {
        if (box !== 'c') {
            setMounted(false)
            setTimeout(() => {
                setOpen(false)
            }, 300);
        }
    }, [box])

    return (
        <div className='projects-container'>
            {mounted && <div className='contact-content mounted'>
                <>
                    <p>email</p>
                    <a href='mailto:fabricio.j.repetto@gmail.com'>fabricio.j.repetto@gmail.com</a>
                </>
                <a href='https://www.linkedin.com/in/fabricio-repetto/' target='_bank'>LinkedIn</a>
                <a href='https://github.com/FabricioJRepetto' target='_bank'>GitHub</a>
                {lang === 'En'
                    ? <a href='https://drive.google.com/file/d/1HgVnEFz6qLbZ_Zyp288uFw5nA3--bIX8/view' target='_bank'>Resume (eng)</a>
                    : <a href='https://drive.google.com/file/d/1GMGpYKMRNpf4J3Rc9I2mwiH4ziS5V_6s/view' target='_bank'>Currículum (esp)</a>}
            </div>}

            <div className={`box-contact-container ${open && 'box-contact-container-open'}`}>
                <div className={`box-contact-inner ${mounted && 'cursor'}`}></div>
                {mounted && <p>{lang === 'En' ? 'Say Hello!' : 'Saludame!'}</p>}
            </div>
        </div>
    )
}

export default Contact