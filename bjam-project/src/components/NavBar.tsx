export function NavBar() {
    type index = number | null
    let sections: string[] = ['Música','Cine','LGBT+','Videijuegos','Animación']
    let i: index = 0;
    let sectionsOptions = sections.map((option) =>
        <section>{option}</section>
    );
    return(
        <>
            <div className="menu">
                <img src="../public/logo.jpg" alt="Noticias BJAM" />
                <a href="../index.html">Inicio</a>
                <select name="sections" id="sections_id">
                    <option>Secciones</option>
                    {sectionsOptions}
                </select>
                <a href="#">Acerca de nosotrxs</a>
            </div>
            <div className="buscador">
                <input type="search" placeholder="Busca noticias en Proyecto BJAM"/>
                <button> <img src="../public/icons/lupa.png" alt="Buscador BJAM" /> </button>
            </div>
        </>
    )
}