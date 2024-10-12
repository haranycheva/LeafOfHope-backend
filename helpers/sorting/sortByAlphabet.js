const sortByAlphabet = (adverts, isReversed) => {
    if(isReversed){
        const sortedAdverts = adverts.sort((a,b) => a.name >= b.name ? -1 : 1)
        return sortedAdverts;
    }
    const sortedAdverts = adverts.sort((a,b) => a.name >= b.name ? 1 : -1)
    return sortedAdverts;
}
export default sortByAlphabet