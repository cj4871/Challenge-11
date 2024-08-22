module.exports = () => {
    return Math.floor((1 + Math.random())*100000)
    .toString(16)
    .substring(1)
}