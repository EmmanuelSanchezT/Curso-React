import React from 'react'
import App from './App'
import { useState } from 'react';
import './Curso.css'

function Curso(){
    const[titulo, setTitulo] = useState ('Curso de React');
    const[software, setSoftware] = useState('Visual Studio Code');
    const[Description, setDescription] = useState ('Un curso básico sobre las bases de react')
    const [image, setImagen ] = useState("../images/car.jpg") 
    
        const changeCourse = (e) =>{
            e.preventDefault();
            const valueInput = e.target.previousSibling.value;
            setTitulo(valueInput)
    
            e.target.previousSibling.value= '';
        }

        const changeSoftware = (e) =>{
            e.preventDefault();
            const valueInput = e.target.previousSibling.value;
            setSoftware(valueInput)
    
            e.target.previousSibling.value= '';
        }

        const changeDescription = (e) =>{
            e.preventDefault();
            const valueInput = e.target.previousSibling.value;
            setDescription(valueInput)
    
            e.target.previousSibling.value= '';
        }

        const changeImage = (e) => {
            setImagen(e.target.src);
            console.log(e.target.src)
        }


    return (
        <section className="">
        <div className="row vh-100">
        <div className="col-12 col-lg-6 img1 d-flex justify-content-start align-items-center"  style={{background:`url(${image}) center/cover`}}>
            <div className='ms-5'>
            <h1 className='text-white'>{titulo}</h1>
            <h4 className='text-white'>{software}</h4>
            <p className='text-white'>{Description}</p>
            <button className='btn'>¡Inscríbete!</button>
            </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
        <div>
        <form action="">
                <input className='form-control pad mb-2' type="text" placeholder='Nombre del curso '/>
                <button className=' btn mb-2' onClick={changeCourse}>Actualizar</button>
                <input  className='form-control pad mb-2' type="text" placeholder='Software'/>
                <button className=' btn mb-2' onClick={changeSoftware}>Actualizar</button>  
                <textarea className='form-control pad mb-2' type="text" placeholder='Descripción'/>
                <button className=' btn mb-2' onClick={changeDescription}>Actualizar</button>
        </form>
        <div>
            <h3>Nueva imagen:</h3>
            <div>
                <img onClick={changeImage}className=' m-1' src="../images/car.jpg" width="100" height="60" alt="" />
                <img onClick={changeImage} className=' m-1' src="../images/K6Rz.gif" width="100" height="60" alt="" />
                <img onClick={changeImage} className=' m-1' src="../images/film.jpg" width="100" height="60" alt="" />
                <img onClick={changeImage} className=' 333333333 m-1' src="../images/3d.jpg" width="100" height="60" alt="" />
            </div>
        </div>
        </div>
        </div>
    </div>
</section>

  )
}

export default Curso