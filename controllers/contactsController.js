const asyncHandler = require("express-async-handler");
const ContactModel = require("../models/contactModels");
  
 // description get all contacts
// route GET
// access =  public

const getContacts = asyncHandler(async(req, res)=>{
   try {
        const contacts = await ContactModel.find();

    if(!contacts){
      res.status(404);
      throw new Error("contacts not found")
    }
    
    res.status(200).send({data:contacts})
   } catch (error) {
      res.status(500).send(error)
   }
  
 })
///////////////////////////////////////////////////////////////////////////////////////////
 // description create contact
// route GET
// access =  public
 const createContact = asyncHandler(async(req, res)=>{
     try {
      const {name, email, phone} = req.body;

      if(!name || !email || !phone){
          res.status(400)
          throw new Error( "All fields are mandatory")
      }    
      
      const emailExist = await ContactModel.findOne({email:email})
      
       if(emailExist){
         return res.status(400).json({message :`Email already exist!`})

      }

      const contacts = await ContactModel.create({
         name,
         email,
         phone
      })
      
      if(!contacts){
         return res.status(400).json({message :`Unable to create contact!`})
      }

       res.status(201).json({message :`Contact created`, data : contacts})
     } catch (error) {
      res.status(500).send(error)

     }
 })
//////////////////////////////////////////////////////////////////////////////
 // description get all contacts
// route GET
// access =  public

 const getContact = asyncHandler(async(req, res)=>{
   try {
      const contact =  await ContactModel.findById(req.params.id)
   
   if(!contact){
      res.status(404);
      throw new Error("Contact not found")
   }
    res.status(200).send(contact)
   } catch (error) {
      res.status(500).send(error)
   }
   
 })

 // description get all contacts
// route GET
// access =  public
 const updateContact = asyncHandler(async(req, res)=>{
   try {
        const contact =  await ContactModel.findById(req.params.id)
   
   if(!contact){
      res.status(404);
      throw new Error("Contact not found")
   }
   const updatedContact = await ContactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
      )
    res.status(200)
    res.send(updatedContact)
   } catch (error) {
      res.status(500).send(error)
   }
  
 })

// description get all contacts
// route GET
// access =  public
 const deleteContact = asyncHandler(async(req, res)=>{
   try {
       const contact = await ContactModel.findById(req.params.id)
   console.log(contact)
   if(!contact){
      return res.status(400).json({message:'contact not found'});
   }
    await ContactModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:'contact deleted'});
   } catch (error) {
      res.status(500).send(error)
   }
  
 });

 module.exports = {getContacts, createContact, getContact, updateContact, deleteContact};