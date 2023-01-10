var Get_date = function () {
    let today = Date.now()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yy = today.getFullYear()

    return `${dd}-${mm}-${yy}`
}




module.exports = {Get_date}