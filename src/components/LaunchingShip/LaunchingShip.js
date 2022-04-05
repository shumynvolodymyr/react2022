import './LaunchingShip.css';

export default function LaunchingShip({item: {mission_name, launch_year, links: {mission_patch_small}}}) {
    return (
        <div className={'launch-ship'}>
            <h1>Mission name: {mission_name}</h1>
            <h2>Launch year: {launch_year}</h2>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
}
