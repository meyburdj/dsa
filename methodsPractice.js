


function bucketSortContacts(contacts, primaryPerson) {
    // Find the maximum relationship number in the input list
    let maxRelationship = 0;
    for (let i = 0; i < contacts.length; i++) {
        maxRelationship = Math.max(maxRelationship, contacts[i].relationship);
    }

    // Create an array of empty buckets
    let buckets = Array.from({ length: maxRelationship + 1 }, () => []);

    // Add each contact to the corresponding bucket
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        if (contact.name === primaryPerson) {
            buckets[0].push(contact);
        } else {
            buckets[contact.relationship].push(contact);
        }
    }

    // Concatenate the contacts in each bucket to get the sorted list
    let sortedContacts = [];
    for (let i = 0; i < buckets.length; i++) {
        sortedContacts = sortedContacts.concat(buckets[i]);
    }

    return sortedContacts;
}
