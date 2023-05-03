const { Collection } = require('../models')
const collection = require('../models/collection')

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

  },
  // create collection
  postCollection: (req, res, next) => {
    const { name, category, slogan, artMaker, description, artRemark, image } = req.body
    if (!name) throw new Error('Collection name is required')
    return Collection.create({
      name,
      category,
      slogan,
      artMaker,
      description,
      artRemark,
      image
    })
      .then(newCollection => res.json({ status: 'success', newCollection }))
      .catch(err => next(err))
  },
  // collection detail
  getCollection: (req, res, next) => {
    const id = req.params.id
    Collection.findByPk(id, {
      raw: true,
      nest: true
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
    Collection.findByPk(id, {
      raw: true,
    })
      .then(collection => {
        if (!collection) throw new Error('The collection is not exist')
        res.json({ status: 'success', collection })
      })
      .catch(err => next(err))
  },
  //edit collection
  putCollection: (req, res, next) => {
    const id = req.params.id
    const { name, category, slogan, artMaker, description, artRemark, image } = req.body
    if (!name) throw new Error('Collection name is required')
    Collection.findByPk(id)
      .then(collection => {
        return collection.update({
          name,
          category,
          slogan,
          artMaker,
          description,
          artRemark,
          image
        })
      })

      .then(editedCollection => res.json({ status: 'success', editedCollection }))
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
      .then(deletedCollection => res.json({ status: 'success', deletedCollection }))
      .catch(err => next(err))
  }
}

module.exports = adminController