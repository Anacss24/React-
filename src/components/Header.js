import components01 from '../IMG/person.png';
import components02 from '../IMG/cart.png';

function Header () {
    return(
        <header>
            <h1> Dell Technologies</h1>
            <input type="text" placeholder = "Pesquisar Dell" autoComplete='off' />
            <img className="img" src ={components01}  alt=""/>
            <a href='#'>Login</a>
            <img className="img02" src ={components02}  alt=""/>
            <a className='carinho' href='#'>Carrinho</a>

            
        </header>
    )
}
export default Header;