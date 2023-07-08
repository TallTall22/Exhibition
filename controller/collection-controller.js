const {Collection,Category}=require('../models')
const {getOffset,getPagination}=require('../helpers/pagination-helper')
const collectionController={
  getcollections:(req,res,next)=>{
    DEFAULT_LIMIT=12
    const categoryId=Number(req.query.categoryId)|| ''
    const limit=Number(req.query.limit)||DEFAULT_LIMIT
    const page=Number(req.query.page)||1
    const offset=getOffset(limit,page)
    Promise.all([
      Collection.findAndCountAll({
      where:{
        ...categoryId?{categoryId}:{}
      },
      limit,
      offset,
      raw:true,
      nest:true
    }),
    Category.findAll({
      raw:true,
      nest:true
    })
    ])
    .then(([collections,categories])=>{
      const FavoritedCollectionId=req.user?.FavoritedCollection?req.user.FavoritedCollection.map(fr=>fr.id):[]
      const data=collections.rows.map(r=>({
        ...r,
        isFavorited:FavoritedCollectionId.includes(r.id)
      }))
      res.json({status:'success',data,categories,pagination:getPagination(limit,page,collections.count)})
    })
    
    .catch(err=>next(err))
  },
  getcollection:(req,res,next)=>{
    const id=req.params.id
    Collection.findByPk(id,{
      raw:true,
      nest:true
    })
    .then(collection=>res.json({status:'success',collection}))
    .catch(err=>next(err))
  }
}

module.exports=collectionController