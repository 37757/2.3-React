import './AboutMe.css';
import ik from './assets/ik.png';

export function AboutMe(){
  return (
    <div className="aboutMe">
      <div className="aboutMe__image">
        <img src={ik} alt="foto van jonge mij" />
      </div>
      <div className="aboutMe__text">
        <h2 className="aboutMe__title">About me</h2>
        <p className="aboutMe__paragraph">Mijn naam is Julien Karch en 
          ik ben 19 jaar oud en ik ben een student van Mediacollege Amsterdam. 
          Ik ben nu in mijn 2de jaar van de Software Development opleiding. 
          Ik heb al een tijde een interresse gehad in programming, en dat is waarom ik deze opleiding doe. 
          In mjn vrije tijd, speel ik graag video games en soms anime of movies. 
          Ik vindt het ook heel leuke om dingen te doen met mijn vrienden and familie.
        </p>
      </div>
    </div>
  )
}
