import spinner from './images/spinner.gif'
export default function Spinner(){
    return(
        <div className="text-center">
        <img className="w-[1.5rem]" src= {spinner} alt="spinner"/>
      </div>
    )
}