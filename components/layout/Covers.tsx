import style from "@/components/layout/Covers.module.css"

const Covers = ({cover }: {cover: string }) => {
    // Retorna el mes actual
    let currentMonth = new Intl.DateTimeFormat('en-En', { month: 'long'}).format(new Date());

    return (
        <div className={style.cover} style={{backgroundImage: `url(${cover})`}}>
           <div className={style.cover_container}>
                <div className={`container ${style.cover_main}`}>
                    <h1 className={style.cover_title}>The best {currentMonth} sales <span>Discover what we have for you</span></h1>
                </div>
            </div> 
        </div>
      );
}
 
export default Covers;