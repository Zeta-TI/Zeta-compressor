import Link from 'next/link'

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="mb-4 text-6xl font-semibold text-blue-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">Oops! Parece que você está perdido.</p>
      <div className="animate-bounce">
        <svg className="mx-auto h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 text-gray-600">Vamos trazer você de volta. <Link href="/" className="text-blue-500">Home</Link>.</p>
    </div>
  )
}