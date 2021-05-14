module.exports = (target,defaultValue = null)=>{
  let result
  try{
    result = eval(target)
  }catch(e) {
    result = defaultValue
  }
  return result
}
