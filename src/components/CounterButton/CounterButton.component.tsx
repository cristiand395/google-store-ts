import './CounterButton.styles.css'

const CounterButton = ({mode}:any) => {
  return (
    <button className='counterButton'>
      {mode}
    </button>
  );
}

export default CounterButton;