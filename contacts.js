const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db/contacts.json');

const listContacts = async() => {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}
  
const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(list => list.id === contactId);
    return result || null;
}
  
const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name, 
        email, 
        phone
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
}

const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(list => list.id === contactId);
    if(index === -1){
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
}
    
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
}; 