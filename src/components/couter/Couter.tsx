// "use client"
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../lib/store';
// import { increment, decrement, incrementByAmount } from '../../lib/features/counter/counterSlice';

// const Counter: React.FC = () => {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div>
//         <button onClick={() => dispatch(increment())}>Increment</button>
//         <span>{count}</span>
//         <button onClick={() => dispatch(decrement())}>Decrement</button>
//       </div>
//       <div>
//         <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
//       </div>
//     </div>
//   );
// };

// export default Counter;
