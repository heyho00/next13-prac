
export default function page({params}) {
  return (
    params.idx ? <div>
      product id : {params.idx} 
    </div> : '없음'
  )
}
