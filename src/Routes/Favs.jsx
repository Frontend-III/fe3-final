import CardFav from "../Components/CardFav";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {


  const favsLocal = JSON.parse(localStorage.getItem('favs'))

  const existenFavs = () => {

    if(favsLocal==null){
      return false}
    else if (favsLocal[0].did == null){  
      favsLocal.shift()
      return true}
    else  return true}
  
  
return (
  existenFavs() ?
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
      {favsLocal.map(dentist => <CardFav did={dentist.did} dname={dentist.dname} dusername={dentist.dusername}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
    :
    <h4>Aun no existen favoritos</h4>
  );
};

export default Favs;
