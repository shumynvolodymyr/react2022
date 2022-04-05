export const getShip = () => {
    return fetch('https://api.spacexdata.com/v3/launches/').then(value => value.json());
}
