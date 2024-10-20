import { addNewContact, getContacts, getContactByName, updateContact , deleteContact} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        // Get all contacts
        .get((req, res, next) => {
            // Middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getContacts)
        
        // Post a new contact
        .post(addNewContact);

    // Corrected the route with a leading slash
    app.route('/contact/:contactId')
        // Get specific contact
        .get(getContactByName)

        .put(updateContact)

        .delete(deleteContact);
};

export default routes;
