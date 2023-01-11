function Get_date() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yy = today.getFullYear()

    return `${dd}-${mm}-${yy}`
}

class Get_New_entry {
    constructor(value) {
        let New = {
            id : Math.random(),
            content : value,
            createdAt : Get_date(),
            editedAt : Get_date()
        }
        return New
    }

    // Get_date() {
    //     let today = new Date()
    //     let dd = today.getDate()
    //     let mm = today.getMonth() + 1
    //     let yy = today.getFullYear()
    
    //     return `${dd}-${mm}-${yy}`
    // }
}

module.exports = {Get_date,Get_New_entry}