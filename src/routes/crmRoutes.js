import {addNewContact, getContacts,getContactWithId, updateContact, deleteContact} from '../controllers/crmController'

const routes =  (app) => {
    app.route(`/contact`)
    //GET all contacts from database as array
    .get( (req,res, next) =>{
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();
    }, getContacts)
    //POST endpoint
    .post( addNewContact);


    app.route(`/contact/:contactId`)
    .get(getContactWithId)
    //PUT contact by ID
    .put(updateContact)
    //DEL contact by ID
    .delete(deleteContact)
}

export default routes;
