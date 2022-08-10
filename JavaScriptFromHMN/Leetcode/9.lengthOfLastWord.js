var lengthOfLastWord = function(s) {
    s=s.trim()
    s=s.split(' ')[s.split(' ').length-1]
    
    return s.length
};

var s=lengthOfLastWord("   fly me   to   the moon  ")
