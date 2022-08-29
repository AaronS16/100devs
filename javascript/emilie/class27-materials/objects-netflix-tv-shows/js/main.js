//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class MakeShow{
    constructor(showName, showLength, showMainCharacter,showTheme){
    this.name = showName
    this.length = showLength
    this.main = showMainCharacter
    this.theme = showTheme
}
play (){
    alert('lets go!')
}
stop(){
    alert('Stop!!')
}
skip (){
    alert('skip that intro!!')
}
}
