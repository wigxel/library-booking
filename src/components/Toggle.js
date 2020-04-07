import React from 'react'

export default function Toggle(props) {
    const [state, setState] = React.useState(false);
  //  const [pin, setPin] = React.useState("");

    // React.useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(() => setPin("02392380"))
    //     .then(json => console.log(json))
    // }, [])

    // React.useEffect(() => {
    //     console.log('Rendering because state was updated!')
    // }, [state])

    // React.useEffect(() => {
    //     console.log('Rendering because pin was updated!')
    // }, [pin])

    return (
      <button onClick={() => {
            // setState(state ? false : true)
            const newState = !state
            props.onClick(newState);
            setState(newState)
        }}>
            { state ? "On":"off"}
        </button>
    )

}
