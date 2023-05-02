import { Link } from "react-router-dom";

export function Projects (){
    return(
        <div className="mt-8">
        <Link to = "/" className="bg-gray-900 text-red-700 rounded-md px-3 py-2 text-sm ml-[80%]">Home page..</Link>
        <h1 className="text-center text-3xl text-black-600 border py-2 ">Projects page</h1>
        <div className="bg-white">

  <div className="relative isolate px-6  lg:px-8">
    
    <div className="mx-auto max-w-2xl py-32 ">
  
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online business</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
        
      </div>
    </div>
    
  </div>
</div>
        </div>
    )
}