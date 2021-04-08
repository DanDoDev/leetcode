/**
 * @param {string[]} emails
 * @return {number}
 */
 const numUniqueEmails = (emails) => {
    let uniqueEmails = {};
    emails.forEach((email) => {
        const processedEmail = emailProcessor(email);
        if(!processedEmail)return;
        uniqueEmails[processedEmail] = true;    
    });
    return Object.values(uniqueEmails).length;
};


const emailProcessor = (email) => {
    // delete everything between + and @, including the +; Start at first plus instance
    // remove periods, as they work as a concat
    if(!email) return;
    const emailSplit = email.split('@');
    emailSplit[0] = emailSplit[0].replace(/\./g,"");
    const instancePlus = emailSplit[0].indexOf('+');
    if(instancePlus >= 0){
        emailSplit[0] = emailSplit[0].substr(0,instancePlus);
    }
    return emailSplit.join("@");
}