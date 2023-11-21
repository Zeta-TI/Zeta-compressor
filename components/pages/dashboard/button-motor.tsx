
type Props = {

  verify: boolean | undefined;
}

export function ButtonMotor({ verify = false }: Props) {
  return (
    <>
      { verify ? (
        <div className="flex items-center p-8 bg-red-600 shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 rounded-full mr-6">
            <svg width={60} height={60} fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12c0-4.969-4.031-9-9-9s-9 4.031-9 9 4.031 9 9 9 9-4.031 9-9Z" />
              <path d="m17.25 9-5.245 6-2.247-2.25" />
              <path d="M8.998 15 6.75 12.75" />
              <path d="m14.33 9-2.416 2.766" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">Compressor está ligado.</span>
            {/* <span className="block text-gray-500">O compressor está ligado</span> */}
          </div>
        </div>
      ) : ( 
        <div className="flex items-center p-8 bg-green-500 shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600rounded-full mr-6">
            <svg width={60} height={60} fill="none" stroke="#000000" strokeLinecap="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 20 20 4" />
              <path d="M20 20 4 4" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">O compressor está desligado.</span>
          </div>
        </div>
      )}
    </>
  )
}