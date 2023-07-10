import notebook from '../IMG/notebook-removebg-preview.png'

function Section (){  
    return(
        <div className='section'>
           
            <h2 className='section_titulo'> Os Melhores Notebook </h2>
            <img className="img_notebook" src ={notebook}  alt=""/>
            <div className='section_texto'>
            <p>Veja os notebooks mais bem avaliados pelos clientes.</p>
                <a href='#' className="section_link">Compre Agora </a>
            </div>
        </div>
        

    )
}

export default Section;



