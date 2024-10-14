const imgProps = {
    0: "small-250px",
    1: "medium-300px",
    2: "large-500px"
}

const getCroppedPictures = ({eager}) => {
    const result = {}
    for (const i in eager){
        result[imgProps[i]] = eager[i].secure_url;
    }
    return result
}

export default getCroppedPictures