function addClass(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) { //ensure the classNames aren't the same
        return;
    }

    if(el.className !== '') {
                                           //ensure class names are separated by a space
        newClass = ' ' + newClass;
    }

    el.className += newClass;        // add the new class in the html line
}

module.exports = addClass;
