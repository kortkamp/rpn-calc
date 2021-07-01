import '../styles/key.scss'

type KeyProps = {
  label: string,
  keyFunction: () => void
}

export function Key(props: KeyProps){

  return(
    <button className='calc-key' onClick={props.keyFunction}>{props.label}</button>
  )
}