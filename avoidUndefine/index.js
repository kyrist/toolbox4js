module.exports = (target,defaultValue = null)=>{
  var result
  try{
    result = eval(target)
  }catch(e) {
    result = defaultValue
  }
  return result
}
