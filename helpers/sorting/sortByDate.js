const sortByDate = (adverts, isReversed) => {
    if(isReversed){
        const sortedAdverts = adverts.sort((a,b) => Date.parse(a.createdAt) -  Date.parse(b.createdAt))
        return sortedAdverts;
    }
    const sortedAdverts = adverts.sort((a,b) => Date.parse(b.createdAt) -  Date.parse(a.createdAt))
    return sortedAdverts;
}

export default sortByDate