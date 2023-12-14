const asyncHandler = require("express-async-handler");
// description get all contacts
// route GET
// access =  public
const getContacts = asyncHandler(async(req, res)=>{
    res.send(`Get all contacts`)
 })

 // description get all contacts
// route GET
// access =  public
 const createContact = asyncHandler(async(req, res)=>{
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400)
        throw new Error( "All fields are mandatory")
    }    
     res.status(201).json(`Contact created`)
 })

 // description get all contacts
// route GET
// access =  public
 const getContact = asyncHandler(async(req, res)=>{
    res.send(`Get contact for ${req.params.id}`)
 })

 // description get all contacts
// route GET
// access =  public
 const updateContact = asyncHandler(async(req, res)=>{
    res.send(`Update contact for ${req.params.id}`)
 })

// description get all contacts
// route GET
// access =  public
 const deleteContact = asyncHandler(async(req, res)=>{
    res.send(`Delete contact for ${req.params.id}`)
 })

 module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};