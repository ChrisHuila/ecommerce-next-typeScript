import HighlightedProducts from '@/components/products/HighlightedProducts'

export default  function Home() {
  
  return (
    <>
      <h2 >home</h2>
      
      {/* @ts-expect-error Async Server Component */}
      <HighlightedProducts />
    </>
  )
}
