// Function below formats date from numerical timestamp to dd/mm/yyyy format

function dateFormatter(timestamp) {

    let date = new Date(timestamp);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) { dd = '0' + dd; };
    if (mm < 10) { mm = '0' + mm; };
    
    return date = mm + '/' + dd + '/' + yyyy;
};

export default dateFormatter;
