export default function OutPutConvert(props) {
    return (
      <div className="flex flex-col justify-center ">
        <h1 className="text-2xl mt-5 mb-5">Votre resultat</h1>
  <h1 className="text-2xl text-red-500">{props.value}</h1>
  
      </div>
    )
  }