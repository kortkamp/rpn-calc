import '../styles/display.scss'

type DisplayProps = {
  value:string
}

export function Display(props:DisplayProps){

  

  return(
    <div className='calc-display'>
      {props.value}
    </div>
  )
}