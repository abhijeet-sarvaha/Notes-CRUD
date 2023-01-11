class Get_New_entry {
    constructor(value) {
        let New = {
            id : Math.random(),
            content : value,
            createdAt : this.Get_date(),
            editedAt : undefined
        }
        return New
    }

    Get_date() {
        let today = new Date()
        let dd = today.getDate()
        let mm = today.getMonth() + 1
        let yy = today.getFullYear()
    
        return `${dd}-${mm}-${yy}`
    }
    
    
}
// Get_date = function () {
//     let today = Date.now()
//     let dd = today.getDate()
//     let mm = today.getMonth() + 1
//     let yy = today.getFullYear()

//     return `${dd}-${mm}-${yy}`
// }

// var Get_New_entry = function (value) {
//     let New = {
//         id : Math.random(),
//         content : value,
//         createdAt : Get_date(),
//         editedAt : undefined
//     }
//     return New
// }


module.exports = {Get_New_entry}