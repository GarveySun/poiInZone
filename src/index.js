module.exports = function(poi,zone){
  let lng = poi[0],lat = poi[1]

  let include = zone.include.some(item=>{
    return lng <= item[1][0] && lng >= item[0][0] && lat <= item[1][1] && lat >= item[0][1]
  })

  if(!include){
    return false
  }

  let exclude = zone.exclude.some(item=>{
    return lng <= item[1][0] && lng >= item[0][0] && lat <= item[1][1] && lat >= item[0][1]
  })

  return !exclude
}
