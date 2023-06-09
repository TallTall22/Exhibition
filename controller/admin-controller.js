const { Collection, Exhibition,User,Video } = require('../models')


const adminController = {
  getCollections: (req, res, next) => {
    Collection.findAll({
      raw: true,
      nest: true
    })
      .then(collections => res.json({ status: 'success', collections }))
      .catch(err => next(err))
  },
  //create collection page
  createCollection: (req, res, next) => {
    Exhibition.findAll({
      raw: true,
      nest: true
    })
      .then(exhibitions => res.json({ status: 'success', exhibitions }))
      .catch(err => next(err))
  },
  // create collection
  postCollection: (req, res, next) => {
    const { name, category, slogan, artMaker, description, artRemark, image, exhibitionId } = req.body
    if (!name) throw new Error('Collection name is required')
    return Collection.create({
      name,
      category,
      slogan,
      artMaker,
      description,
      artRemark,
      image,
      exhibitionId
    })
      .then(newCollection => res.json({ status: 'success', collection:newCollection }))
      .catch(err => next(err))
  },
  // collection detail
  getCollection: (req, res, next) => {
    const id = req.params.id
    Collection.findByPk(id, {
      raw: true,
      nest: true,
      include: [Exhibition]
    })
      .then(collection => {
        if (!collection) throw new Error('The collection is not exist')
        res.json({ status: 'success', collection })
      })
      .catch(err => next(err))
  },
  // edit collection page
  editCollection: (req, res, next) => {
    const id = req.params.id
    Promise.all([
      Collection.findByPk(id, { raw: true }),
      Exhibition.findAll({ raw: true })
    ])
      .then(([collection,exhibitions]) => {
        if (!collection) throw new Error('The collection is not exist')
        res.json({ status: 'success', collection, exhibitions })
      })
      .catch(err => next(err))
  },
  //edit collection
  putCollection: (req, res, next) => {
    const id = req.params.id
    const { name, category, slogan, artMaker, description, artRemark, image, exhibitionId } = req.body
    if (!name) throw new Error('Collection name is required')
    Collection.findByPk(id)
      .then(collection => {
        if (!collection) throw new Error('The collection is not exist')
        return collection.update({
          name,
          category,
          slogan,
          artMaker,
          description,
          artRemark,
          image,
          exhibitionId
        })
      })
      .then(editedCollection => res.json({ status: 'success', collection:editedCollection }))
      .catch(err => next(err))
  },
  deleteCollection: (req, res, next) => {
    const id = req.params.id
    Collection.findByPk(id)
    then(collection => {
      if (!collection) {
        const err = new Error('The collection is not exist')
        err.status = 404
        throw err
      }
      return collection.destroy()
    })
      .then(deletedCollection => res.json({ status: 'success', collection:deletedCollection }))
      .catch(err => next(err))
  },
  //get exhibitions
  getExhibitions: (req, res, next) => {
    Exhibition.findAll({
      raw: true,
      nest: true
    })
      .then(exhibitions => res.json({ status: 'success', exhibitions }))
      .catch(err => next(err))
  },
  //create exhibition page
  createExhibition: (req, res, next) => {

  },
  // create exhibition
  postExhibition: (req, res, next) => {
    const { name, startDate, endDate, openTime, location, fare, description } = req.body
    if (!name) throw new Error('Exhibition name is required')
    return Exhibition.create({
      name,
      startDate,
      endDate,
      openTime,
      location,
      fare,
      description
    })
      .then(newExhibition => res.json({ status: 'success', exhibition:newExhibition }))
      .catch(err => next(err))
  },
  // exhibition detail
  getExhibition: (req, res, next) => {
    const id = req.params.id
    Exhibition.findByPk(id, {
      raw: true,
      nest: true,
      include: Collection
    })
      .then(exhibition => {
        if (!exhibition) throw new Error('The exhibition is not exist')
        res.json({ status: 'success', exhibition })
      })
      .catch(err => next(err))
  },
  // edit exhibition page
  editExhibition: (req, res, next) => {
    const id = req.params.id
    Exhibition.findByPk(id, {
      raw: true,
    })
      .then(exhibition => {
        if (!exhibition) throw new Error('The exhibition is not exist')
        res.json({ status: 'success', exhibition })
      })
      .catch(err => next(err))
  },
  //edit exhibition
  putExhibition: (req, res, next) => {
    const id = req.params.id
    const { name, startDate, endDate, openTime, location, fare, description } = req.body
    if (!name) throw new Error('Exhibition name is required')
    Exhibition.findByPk(id)
      .then(exhibition => {
        return exhibition.update({
          name,
          startDate,
          endDate,
          openTime,
          location,
          fare,
          description
        })
      })
      .then(editedExhibition => res.json({ status: 'success', exhibition:editedExhibition }))
      .catch(err => next(err))
  },
  //delete Exhibition
  deleteExhibition: (req, res, next) => {
    const id = req.params.id
    Exhibition.findByPk(id)
    then(exhibition => {
      if (!exhibition) {
        const err = new Error('The exhibition is not exist')
        err.status = 404
        throw err
      }
      return exhibition.destroy()
    })
      .then(deletedExhibition => res.json({ status: 'success', exhibition:deletedExhibition }))
      .catch(err => next(err))
  },
  // get Users
  getUsers: (req, res, next) => {
    User.findAll({
      raw: true,
      nest: true
    })
      .then(users => res.json({ status: 'success', users }))
      .catch(err => next(err))
  },
  // patch User isAdmin
  patchUser:(req,res,next)=>{
    const id=req.params.id
    User.findByPk(id)
    .then(user=>{
      if(user.email===process.env.SUPER_USER_EMAIL) throw new Error('This user permission can not be change')
      return user.update({isAdmin:!user.isAdmin})
    })
    .then(user => res.json({ status: 'success', user }))
    .catch(err => next(err))
  },
  // get Videos
  getVideos:(req,res,next)=>{
    Video.findAll({
      raw:true,
      nest:true
    })
    .then(videos=>res.json({status:'success',videos}))
    .catch(err=>next(err))
  }
}

module.exports = adminController