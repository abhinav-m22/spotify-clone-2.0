import { loader } from '../assets';

const Loader = ({title}) => (
  <div className='w-full flex justify-center items-center flex-col'>
    <img src={loader} alt="loader" className='h-32 w-32 object-contain' />
    <h1 className='font-bold text-2xl text-white mt-2'>{title || "Loading..."}</h1>
  </div>
);

export default Loader;
