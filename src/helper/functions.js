const shorten = (title) => {
    let splittedTitle = title.split(" ");
    const newTitle = `${splittedTitle[0]} ${splittedTitle[1]}`
    return newTitle;
}

export {shorten};