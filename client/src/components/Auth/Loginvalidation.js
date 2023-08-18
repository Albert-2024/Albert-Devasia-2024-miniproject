function Validation(){

    let error={}
    let values= {}

    if(values.email ===''){
        error.email = 'email should not be empty'
    }
    return error
}

export default Validation