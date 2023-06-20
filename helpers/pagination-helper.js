const getOffset=(limit=12, page=1)=>(page-1) * limit
const getPagination=(limit=12,page=1,total=300)=>{
  const totalPage=Math.ceil(total/limit)
  const pages=Array.from({length:totalPage},(_,index)=>index+1)
  const currentPage=page< 1 ? 1 : page > totalPage ? totalPage : page
  const prev=page - 1 < 1 ? 1 : page - 1
  const next=page + 1 > totalPage ? totalPage : page + 1
  return{
    totalPage,
    pages,
    currentPage,
    prev,
    next
  }
}

module.exports={
  getOffset,
  getPagination
}
