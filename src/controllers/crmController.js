import mongoose from "mongoose";
import { ContactScheme } from "../models/crmModel";

const Contact = mongoose.model('Contact', ContactScheme);

export const addNewContact = async (req, res) => {
    const newContact = new Contact(req.body);
    
    try {
        const contact = await newContact.save();
        res.status(200).json(contact);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getContacts = async (req,res) => {
    try {
       const contacts = await Contact.find({});
       res.status(200).json(contacts);
    } catch (err) {
        res.status(500).send(err);
    }
}
