const breeds = ["affenpinscher", "african", "airedale", "akita", "appenzeller", "shepherd-australian", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "chihuahua", "chow", "clumber", "cockapoo", "husky", "keeshond", "kelpie", "komondor", "kuvasz", "labradoodle", "labrador", "leonberg", "lhasa"]
let breed = breeds[Math.floor(Math.random()*breeds.length)];
let apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`


export default apiUrl