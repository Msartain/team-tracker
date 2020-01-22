export function getAll(){
    return fetch('/api/teams/index')
    .then(res => res.json());
}