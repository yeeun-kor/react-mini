import Spinner from '../assets/spin.gif';
export default function Loading() {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center">
      <div className="text-center text-3xl">Loading</div>
      <img src={Spinner} alt="loading" width="5%" />
    </div>
  );
}
