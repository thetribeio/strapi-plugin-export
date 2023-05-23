const getTransformation = (entry,customFormats)=>{
  return Object.keys(customFormats).filter((column) => entry[column] !== undefined);
}

module.exports = ({strapi}) => ({
  process(contentType,entries){
      const customFormats = strapi.config.get('plugin.export-data')?.formats?.[contentType];
      if(!customFormats || Object.keys(customFormats).length === 0){
        return entries;
      }
      entries.forEach(entry => {
        if(customFormats){
          const transformations = getTransformation(entry,customFormats);
          transformations.forEach((column)=>{
            entry[column] = customFormats[column](entry[column]);
          })
        }
      });
      return entries;
  }
})
