import style from "@/components/layout/Covers.module.css"

const Covers = ({cover }: {cover: string }) => {
    // Retorna el mes actual
    let mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());

    return (
        <div className={style.cover} style={{backgroundImage: `url(${cover})`}}>
           <div className={style.cover_container}>
                <div className={`container ${style.cover_main}`}>
                    <h1 className={style.cover_title}>Las mejores ofertas de {mesActual}<span>Descuebre lo que tenemos para ti</span></h1>
                </div>
            </div> 
        </div>
      );
}
 
export default Covers;